import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PostsInterface } from 'src/interfaces/post.interface';
import { CreatePostsDTO } from '../dto/posts.dto';
import { ErrorManager } from 'src/utils/error.manager';
import { BlogInterface } from 'src/interfaces/blog.interface';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel('posts') private readonly postsModel: Model<PostsInterface>,
    @InjectModel('blogs') private readonly blogsModel: Model<BlogInterface>,
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
      return;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
}
