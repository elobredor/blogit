import { Body, Controller, Get, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { BlogsService } from '../services/blogs.service';
import { CreateBlogsDTO } from '../dto/blogs.dto';

@Controller('blogs')
export class BlogsController {
  constructor(private readonly blogsService: BlogsService) {}

  @Post('create/:userId')
  public async createBlog(@Res() response, @Body() body: CreateBlogsDTO, @Param('userId') userId: string) {
    await this.blogsService.createBlog(body, userId);
    return response.status(HttpStatus.CREATED).json({
      message: 'Blog has been created successfully',
    });
  }
}
