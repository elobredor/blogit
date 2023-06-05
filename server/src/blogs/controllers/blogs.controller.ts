import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { BlogsService } from '../services/blogs.service';
import { CreateBlogsDTO } from '../dto/blogs.dto';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { PublicAccess } from 'src/auth/decorators/public.decorator';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';

@Controller('blogs')
@UseGuards(AuthGuard, RolesGuard)
export class BlogsController {
  constructor(private readonly blogsService: BlogsService) {}

  //create blogs
  @Roles('CREATOR')
  @Post('create')
  public async createBlog(@Body() body: CreateBlogsDTO) {
    const blog = await this.blogsService.createBlog(body);
    return blog;
  }

  //get blogs by category
  @PublicAccess()
  @Get('category/:category')
  public async getBlogsByCategory(@Param('category') category: string) {
    const blogs = await this.blogsService.getBlogsByCategory(category);
    return blogs;
  }

  //method to get all blogs
  @PublicAccess()
  @Get()
  public async getAllBlogs() {
    const blogs = await this.blogsService.getAllBlogs();
    return blogs;
  }

  //method to get blog by id
  @PublicAccess()
  @Get(':id')
  public async getBlogById(@Param('id') id: string) {
    const blog = await this.blogsService.getBlogById(id);
    return blog;
  }

  //method to get blog by userId
  @PublicAccess()
  @Get('user/:userId')
  public async getBlogByUserId(@Param('userId') userId: string) {
    return await this.blogsService.getBlogsByUserId(userId);
  }
}
