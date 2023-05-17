import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BlogInterface } from 'src/interfaces/blog.interface';
import { CreateBlogsDTO } from '../dto/blogs.dto';
import { ErrorManager } from 'src/utils/error.manager';
import { UserInterface } from 'src/interfaces/user.interface';

@Injectable()
export class BlogsService {
  constructor(
    @InjectModel('blogs') private readonly blogModel: Model<BlogInterface>,
    @InjectModel('blogs') private readonly userModel: Model<UserInterface>,
  ) {}

  //This function creates a new blog in a database using the provided data and returns the created blog.
  public async createBlog(body: CreateBlogsDTO, userId: string): Promise<BlogInterface> {
    try {
      const user = await this.userModel.findOne({ userId });

      //If the user is not found, throw an error.
      if (!user) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `User ID: ${userId} not found`,
        });
      }
      //If the user is found, create a new blog and save it to the database.
      const newBlog = new this.blogModel(body);
      //This is a workaround for the bug in mongoose where the _id is not being set.
      await user.updateOne({ blog: { _id: newBlog._id, category: body.category } });
      return;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
}
