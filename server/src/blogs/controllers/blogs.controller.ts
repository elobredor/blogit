import { Body, Controller, Get, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { BlogsService } from '../services/blogs.service';
import { CreateBlogsDTO } from '../dto/blogs.dto';

@Controller('blogs')
export class BlogsController {
  constructor(private readonly blogsService: BlogsService) {}

  //create blogs
  @Post('create')
  public async createBlog(@Res() response: Response, @Body() body: CreateBlogsDTO) {
    const blog = await this.blogsService.createBlog(body);
    return response.status(HttpStatus.CREATED).json({
      message: 'Blog has been created successfully',
      blog,
    });
  }
  //get blogs by category
  @Get('category/:category')
  public async getBlogsByCategory(@Res() response: Response, @Param('category') category: string) {
    const blogs = await this.blogsService.getBlogsByCategory(category);
    return response.status(HttpStatus.OK).json(blogs);
  }
}
