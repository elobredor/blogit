import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { PostsInterface } from 'src/interfaces/post.interface';
import { CreatePostsDTO, CreateUpdatePostDTO } from '../dto/posts.dto';
import { ErrorManager } from 'src/utils/error.manager';
import { BlogInterface } from 'src/interfaces/blog.interface';
import { CreatePostsLikesDTO } from '../dto/postLikes.dto';
import { NotificationsService } from 'src/notification/services/notifications.service';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel('posts') private readonly postsModel: Model<PostsInterface>,
    @InjectModel('blogs') private readonly blogsModel: Model<BlogInterface>,
    private readonly notificationsService: NotificationsService,
  ) {}
  //This function creates a new post in a database using the provided data and returns the created post.
  public async createPost(body: CreatePostsDTO): Promise<PostsInterface> {
    const { blogId } = body;
    try {
      const blog = await this.blogsModel.findById(blogId);

      //If the user is not found, throw an error.
      if (!blog) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `Blog with ID: ${blogId} not found`,
        });
      }
      //If the user is found, create a new blog and save it to the database.
      const newPost = new this.postsModel(body);
      return await newPost.save();
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
  //This function returns all the posts in a database ordered by the date of creation.
  public async getAllPosts(page: number): Promise<PostsInterface[]> {
    const limit: number = 100;
    const skip: number = (page - 1) * limit;
    try {
      const posts = await this.postsModel
        .aggregate([
          {
            $match: {
              status: 1,
            },
          },
          {
            $unwind: '$status',
          },
          {
            $lookup: {
              from: 'blogs',
              localField: 'blogId',
              foreignField: '_id',
              as: 'blogs',
            },
          },
          {
            $unwind: '$blogs',
          },
          {
            $sort: {
              createdAt: -1,
            },
          },
          {
            $lookup: {
              from: 'users',
              localField: 'blogs.userId',
              foreignField: '_id',
              as: 'users',
            },
          },
          {
            $unwind: '$users',
          },
          {
            $group: {
              _id: '$_id',
              userId: { $first: '$users.userId' },
              userName: { $first: '$users.userName' },
              profileImage: { $first: '$users.profileImage' },
              blogId: { $first: '$blogId' },
              category: { $first: '$blogs.category' },
              title: { $first: '$title' },
              comments: { $first: '$comments' },
              images: { $first: '$images' },
              postLikes: { $first: '$postLikes' },
              createdAt: { $first: '$createdAt' },
            },
          },
        ])
        .skip(skip)
        .limit(limit);
      return posts;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
  //This function returns a post with the provided ID.
  public async getPostById(postId: string): Promise<PostsInterface[]> {
    try {
      //transform the postId to a mongoose ObjectId
      const postObjectId = new Types.ObjectId(postId);

      const post = await this.postsModel.aggregate([
        {
          $match: {
            _id: postObjectId,
          },
        },
        {
          $lookup: {
            from: 'blogs',
            localField: 'blogId',
            foreignField: '_id',
            as: 'blogs',
          },
        },
        {
          $unwind: '$blogs',
        },
        {
          $lookup: {
            from: 'users',
            localField: 'blogs.userId',
            foreignField: '_id',
            as: 'users',
          },
        },
        {
          $unwind: '$users',
        },
        {
          $group: {
            _id: '$_id',
            userId: { $first: '$users.userId' },
            userName: { $first: '$users.userName' },
            profileImage: { $first: '$users.profileImage' },
            title: { $first: '$title' },
            content: { $first: '$content' },
            images: { $first: '$images' },
            status: { $first: '$status' },
            postLikes: { $first: '$postLikes' },
            createdAt: { $first: '$createdAt' },
            comments: { $first: '$comments' },
            category: { $first: '$blogs.category' },
          },
        },
      ]);
      //If the post is not found, throw an error.
      if (!post) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `Post with ID: ${postId} not found`,
        });
      }
      console.log(post[0]);
      return post[0];
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
  //like/disLike a post
  public async addLike(body: CreatePostsLikesDTO, postId: string): Promise<PostsInterface> {
    const { userId } = body;
    try {
      const post = await this.postsModel.findById({ _id: postId });
      //If the post is not found, throw an error.
      if (!post) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `Post with ID: ${postId} not found`,
        });
      }

      if (!post.postLikes.includes(userId)) {
        post.postLikes.push(userId);
        await post.save();

        //create a notification for the user that liked the post
        await this.notificationsService.createNotification({
          postId: postId,
          content: 'le gusta tu artículo',
          recipient: '',
          origin: userId,
          notificationType: 'like',
        });

        return;
      } else {
        await this.postsModel.findByIdAndUpdate({ _id: postId }, { $pull: { postLikes: userId } });
        return;
      }
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
  //Get posts by keyword
  public async getPostsByKeyword(keyword: string): Promise<PostsInterface[]> {
    try {
      //find posts by title and keyword
      const posts = await this.postsModel.aggregate([
        {
          $match: {
            title: { $regex: keyword, $options: 'i' },
          },
        },
        {
          $unwind: '$title',
        },
        {
          $lookup: {
            from: 'blogs',
            localField: 'blogId',
            foreignField: '_id',
            as: 'blogs',
          },
        },
        {
          $unwind: '$blogs',
        },
        {
          $sort: {
            createdAt: -1,
          },
        },
        {
          $lookup: {
            from: 'users',
            localField: 'blogs.userId',
            foreignField: '_id',
            as: 'users',
          },
        },
        {
          $unwind: '$users',
        },
        {
          $group: {
            _id: '$_id',
            userId: { $first: '$users.userId' },
            userName: { $first: '$users.userName' },
            profileImage: { $first: '$users.profileImage' },
            blogId: { $first: '$blogId' },
            category: { $first: '$blogs.category' },
            title: { $first: '$title' },
            comments: { $first: '$comments' },
            images: { $first: '$images' },
            postLikes: { $first: '$postLikes' },
            createdAt: { $first: '$createdAt' },
          },
        },
      ]);

      return posts;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
  //function change status of post to 0
  public async changeStatus(postId: string): Promise<PostsInterface> {
    try {
      const post = await this.postsModel.findOneAndUpdate({ _id: postId }, { status: 0 });
      //If the post is not found, throw an error.
      if (!post) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `Post with ID: ${postId} not found`,
        });
      }
      return;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
  //function change status of post to 1 (enable)
  public async enablePost(postId: string): Promise<PostsInterface> {
    try {
      const post = await this.postsModel.findOneAndUpdate({ _id: postId }, { status: 1 });
      //If the post is not found, throw an error.
      if (!post) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `Post with ID: ${postId} not found`,
        });
      }
      return;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
  //function to update post
  public async updatePost(postId: string, body: CreateUpdatePostDTO): Promise<PostsInterface> {
    try {
      const post = await this.postsModel.findByIdAndUpdate({ _id: postId }, body);
      //If the post is not found, throw an error.
      if (!post) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `Post with ID: ${postId} not found`,
        });
      }
      return;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
}
