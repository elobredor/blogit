import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserInterface } from 'src/interfaces/user.interface';
import { CreateUserDto, UserUpdateDTO } from '../dto/user.dto';
import { ErrorManager } from 'src/utils/error.manager';

@Injectable()
export class UsersService {
  constructor(@InjectModel('users') private readonly userModel: Model<UserInterface>) {}

  //This function creates a new user in a database using the provided data and returns the created user.
  async create(body: CreateUserDto): Promise<UserInterface> {
    const { email } = body;
    try {
      //check if user already exist
      const userExist = await this.userModel.findOne({ email });
      if (userExist) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'User already exist',
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
          $unwind: '$userId',
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
          $unwind: '$posts',
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
            profilePicture: { $first: '$profilePicture' },
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
      const user = await this.userModel.findOneAndUpdate({ userId: userId }, body, { new: true });
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
  //function to save posts
  public async savePosts(userId: string, body: UserUpdateDTO): Promise<UserInterface> {
    try {
      const user = await this.userModel.findOneAndUpdate({ userId: userId }, { $push: { saved: body } }, { new: true });
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
}
