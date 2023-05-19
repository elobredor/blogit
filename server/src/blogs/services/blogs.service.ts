import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BlogInterface } from 'src/interfaces/blog.interface';
import { CreateBlogsDTO } from '../dto/blogs.dto';
import { ErrorManager } from 'src/utils/error.manager';

@Injectable()
export class BlogsService {
  constructor(@InjectModel('blogs') private readonly blogModel: Model<BlogInterface>) {}

  //This function creates a new blog in a database using the provided data and returns the created blog.
  public async createBlog(body: CreateBlogsDTO): Promise<BlogInterface> {
    try {
      const { userId, category } = body;
      const blogExist = await this.blogModel.findOne({ userId, category });

      //If the blog already exists, throw an error.
      if (blogExist?.userId === userId && blogExist?.category === category) {
        throw new ErrorManager({
          type: 'FORBIDDEN',
          message: `Blog with userId: ${userId} and category: ${category} already exists`,
        });
      }
      //If the user is found, create a new blog and save it to the database.
      const newBlog = new this.blogModel(body);
      return await newBlog.save();
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
}
