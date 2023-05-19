import { Body, Controller, Get, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { BlogsService } from '../services/blogs.service';
import { CreateBlogsDTO } from '../dto/blogs.dto';

@Controller('blogs')
export class BlogsController {
  constructor(private readonly blogsService: BlogsService) {}

  @Post('create')
  public async createBlog(@Res() response, @Body() body: CreateBlogsDTO) {
    const blog = await this.blogsService.createBlog(body);
    return response.status(HttpStatus.CREATED).json({
      message: 'Blog has been created successfully',
      blog,
    });
  }
}
