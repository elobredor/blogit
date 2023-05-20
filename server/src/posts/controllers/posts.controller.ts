import { Body, Controller, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { PostsService } from '../services/posts.service';
import { CreatePostsDTO } from '../dto/posts.dto';
import { ParseObjectIdPipe } from 'src/utils/parse-object-id-pipe.pipe';
import { CreatePostsLikesDTO } from '../dto/postLikes.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  //function to register a new post
  @Post('create')
  public async createPost(@Res() response, @Body() body: CreatePostsDTO) {
    await this.postsService.createPost(body);
    return response.status(HttpStatus.CREATED).json({
      message: 'Post has been created successfully',
    });
  }
  //function to get all posts order by date
  @Get('all')
  public async getAllPosts(@Res() response, @Param('page') page: number) {
    const posts = await this.postsService.getAllPosts(page);
    return response.status(HttpStatus.OK).json({
      posts,
    });
  }
  //function to get a single post
  @Get(':postId')
  public async getSinglePost(@Res() response, @Param('postId', ParseObjectIdPipe) postId: string) {
    const post = await this.postsService.getPostById(postId);
    return response.status(HttpStatus.OK).json({
      post,
    });
  }
  //Like/disLike a post
  @Put('like/:postId')
  public async likePost(
    @Res() response,
    @Body() body: CreatePostsLikesDTO,
    @Param('postId', ParseObjectIdPipe) postId: string,
  ) {
    await this.postsService.addLike(body, postId);
    return response.status(HttpStatus.OK).json({
      message: 'Post has been updated successfully',
    });
  }
  //function to get posts by category
  @Get('keyword/:keyword')
  public async getPostsByCategory(@Res() response, @Param('keyword') keyword: string) {
    const posts = await this.postsService.getPostsByKeyword(keyword);
    return response.status(HttpStatus.OK).json({
      posts,
    });
  }
}
