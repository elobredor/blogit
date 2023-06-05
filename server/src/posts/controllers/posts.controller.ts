import { Body, Controller, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { PostsService } from '../services/posts.service';
import { CreatePostsDTO, CreateUpdatePostDTO } from '../dto/posts.dto';
import { ParseObjectIdPipe } from 'src/utils/parse-object-id-pipe.pipe';
import { CreatePostsLikesDTO } from '../dto/postLikes.dto';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { PublicAccess } from 'src/auth/decorators/public.decorator';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { AuthGuard } from 'src/auth/guards/auth.guard';

@Controller('posts')
@UseGuards(AuthGuard, RolesGuard)
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  //function to register a new post
  @Roles('CREATOR')
  @Post('create')
  public async createPost(@Body() body: CreatePostsDTO) {
    await this.postsService.createPost(body);
    return { message: 'Post has been created successfully' };
  }

  //function to get all posts order by date
  @Roles('CREATOR')
  @Get('all/:page')
  public async getAllPosts(@Param('page') page: number) {
    const posts = await this.postsService.getAllPosts(page);
    return posts;
  }

  //function to get a single post
  @PublicAccess()
  @Get(':postId')
  public async getSinglePost(@Param('postId', ParseObjectIdPipe) postId: string) {
    const post = await this.postsService.getPostById(postId);
    return post;
  }

  //Like/disLike a post
  @Roles('BASIC')
  @Put('like/:postId')
  public async likePost(@Body() body: CreatePostsLikesDTO, @Param('postId', ParseObjectIdPipe) postId: string) {
    await this.postsService.addLike(body, postId);
    return { message: 'Post has been updated successfully' };
  }

  //function to get posts by category
  @PublicAccess()
  @Get('keyword/:keyword')
  public async getPostsByCategory(@Param('keyword') keyword: string) {
    const posts = await this.postsService.getPostsByKeyword(keyword);
    return posts;
  }

  //method to change the status of a post to 0
  @Roles('CREATOR')
  @Put('status/:postId')
  public async changePostStatus(@Param('postId', ParseObjectIdPipe) postId: string) {
    await this.postsService.changeStatus(postId);
    return { message: 'Post has been removed successfully' };
  }

  //method to change the status of a post
  @PublicAccess()
  @Put('enable/:postId')
  public async enablePostStatus(@Param('postId', ParseObjectIdPipe) postId: string) {
    await this.postsService.enablePost(postId);
    return { message: 'Post has been enabled successfully' };
  }

  //method to update a post
  @Roles('CREATOR')
  @Put('update/:postId')
  public async updatePost(@Param('postId', ParseObjectIdPipe) postId: string, @Body() body: CreateUpdatePostDTO) {
    await this.postsService.updatePost(postId, body);
    return { message: 'Post has been updated successfully' };
  }
}
