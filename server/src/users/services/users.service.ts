import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserInterface } from 'src/interfaces/user.interface';
import { CreateUserDto, UserUpdateDTO } from '../dto/user.dto';
import { ErrorManager } from 'src/utils/error.manager';
import { BlogInterface } from 'src/interfaces/blog.interface';
import { PostsInterface } from 'src/interfaces/post.interface';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('users') private readonly userModel: Model<UserInterface>,
    @InjectModel('blogs') private readonly blogModel: Model<BlogInterface>,
    @InjectModel('posts') private readonly postsModel: Model<PostsInterface>,
  ) {}

  //This function creates a new user in a database using the provided data and returns the created user.
  async create(body: CreateUserDto): Promise<UserInterface> {
    const { email } = body;
    try {
      //check if user already exist
      const userExist = await this.userModel.findOne({ email });
      if (userExist || userExist.userId.toString() === body.userId) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: `User with ${email} or ${body.userId} already exist`,
        });
      }
      const newUser = new this.userModel(body);
      return await newUser.save();
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
  //This function finds and returns a user by their ID.
  public async findOne(userId: string): Promise<UserInterface> {
    try {
      const user = await this.userModel.aggregate([
        {
          $match: {
            userId: userId,
          },
        },
        {
          $lookup: {
            from: 'blogs',
            localField: '_id',
            foreignField: 'userId',
            as: 'blogs',
          },
        },
        {
          $unwind: '$blogs',
        },
        {
          $lookup: {
            from: 'posts',
            localField: 'blogs._id',
            foreignField: 'blogId',
            as: 'posts',
          },
        },
        {
          $sort: {
            'posts.createdAt': -1,
          },
        },
        {
          $group: {
            _id: '$_id',
            userId: { $first: '$userId' },
            userName: { $first: '$userName' },
            email: { $first: '$email' },
            profileImage: { $first: '$profileImage' },
            role: { $first: '$role' },
            status: { $first: '$status' },
            blogs: {
              $push: {
                _id: '$blogs._id',
                category: '$blogs.category',
                posts: '$posts',
              },
            },
          },
        },
        {
          $project: {
            createdAt: 0,
            updatedAt: 0,
            __v: 0,
            'blogs.userId': 0,
            'blogs.__v': 0,
            'blogs.posts.__v': 0,
          },
        },
      ]);

      if (!user[0]) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: 'User not found',
        });
      }
      return user[0];
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
  //function to get userProfile
  public async getUserProfile(userId: string): Promise<UserInterface> {
    try {
      const user = await this.userModel.findOne({ userId: userId }).select('-__v');
      if (!user) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: 'User not found',
        });
      }
      return user;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
  //function to update user
  public async updateUser(userId: string, body: UserUpdateDTO): Promise<UserInterface> {
    try {
      const user = await this.userModel.findOneAndUpdate({ userId: userId }, body);
      if (!user) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: 'User not found',
        });
      }
      return;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
  //function to save posts
  public async savePosts(userId: string, body: UserUpdateDTO): Promise<UserInterface> {
    try {
      let user: UserInterface;
      //check if user exist
      user = await this.userModel.findOne({ userId });
      //if user not exist throw error
      if (!user) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: 'User not found',
        });
      }

      //check if post title is already exist in saved array
      const savedPost = user.saved.some((post) => post.title === body.title);

      if (!savedPost) {
        //if post title is not exist in saved array then push postId in saved array
        user = await this.userModel.findOneAndUpdate(
          { userId: userId },
          { $push: { saved: { title: body.title, posts: { postId: body.postId, images: body.images } } } },
          { new: true },
        );
      } else {
        //if post title is already exist, find the object
        const postTitle = user.saved.find((post) => post.title === body.title);
        if (!postTitle) {
          throw new ErrorManager({
            type: 'NOT_FOUND',
            message: 'Post title not found',
          });
        }
        //check if postId is already exist in posts array
        const postId = postTitle.posts.some((post) => post.postId === body.postId);

        if (!postId) {
          //if postId is not exist in posts array then push postId in posts array
          postTitle.posts.push({ postId: body.postId, images: body.images });
          await user.save();
        } else {
          //if postId is already exist in posts array then remove postId from posts array
          postTitle.posts = postTitle.posts.filter((post) => post.postId.toString() !== body.postId);
          await user.save();
        }
      }
      return user;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
  //function to change status to user and his posts
  public async changeStatus(userId: string): Promise<UserInterface> {
    try {
      const user = await this.userModel.findOneAndUpdate({ userId: userId }, { status: 0 });
      if (!user) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: 'User not found',
        });
      }
      const blog = await this.blogModel.findOne({ userId: user._id });
      await this.postsModel.updateMany({ blogId: blog._id }, { $set: { status: 0 } });
      return;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
  //function to enable user and his posts
  public async enableUser(userId: string): Promise<UserInterface> {
    try {
      const user = await this.userModel.findOneAndUpdate({ userId: userId }, { status: 1 });
      if (!user) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: 'User not found',
        });
      }
      //enable posts
      const blog = await this.blogModel.findOne({ userId: user._id });
      await this.postsModel.updateMany({ blogId: blog._id }, { $set: { status: 1 } });
      return;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
}
