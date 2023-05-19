import { Body, Controller, Get, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { PostsService } from '../services/posts.service';
import { CreatePostsDTO } from '../dto/posts.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  //function
  @Post('create')
  public async createBlog(@Res() response, @Body() body: CreatePostsDTO) {
    await this.postsService.createPost(body);
    return response.status(HttpStatus.CREATED).json({
      message: 'Post has been created successfully',
    });
  }
}
