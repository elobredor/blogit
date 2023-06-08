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
    @InjectModel('users') private readonly usersModel: Model<UserInterface>,
  ) {}

  //This function creates a new blog in a database using the provided data and returns the created blog.
  public async createBlog(body: CreateBlogsDTO): Promise<BlogInterface> {
    try {
      const { userId, category } = body;
      const userExist = await this.usersModel.findById(userId);

      //If the user does not exists, throw an error.
      if (!userExist) {
        throw new ErrorManager({
          type: 'FORBIDDEN',
          message: `User not valid`,
        });
      }

      const blogExist = await this.blogModel.find({ userId });

      const categoryExist = blogExist.find((blog) => blog.category === category);
      //If the category already exists, throw an error.
      if (categoryExist) {
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

  //function to get blogs by category
  public async getBlogsByCategory(category: string): Promise<BlogInterface[]> {
    try {
      const blogs = await this.blogModel.find({ category }).select('-__v');
      return blogs;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //function to get all blogs
  public async getAllBlogs(): Promise<BlogInterface[]> {
    try {
      const blogs = await this.blogModel.find().select('-__v');
      return blogs;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //function to get blog by id
  public async getBlogById(id: string): Promise<BlogInterface> {
    try {
      const blog = await this.blogModel.findById(id).select('-__v');
      return blog;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //function to get blog by user id
  public async getBlogsByUserId(userId: string): Promise<BlogInterface[]> {
    const blogs = await this.blogModel.find({ userId }).select('-__v');
    return blogs;
  }
}
