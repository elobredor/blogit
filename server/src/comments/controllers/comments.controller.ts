import { Body, Controller, Get, HttpStatus, Param, Post, Res, Put } from '@nestjs/common';
import { CommentsService } from '../services/comments.service';
import { CreateCommentDTO } from '../dto/comments.dto';
import { ParseObjectIdPipe } from 'src/utils/parse-object-id-pipe.pipe';
import { CreateCommentLikesDTO } from '../dto/commentLikes.dto';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}
  //function to create a comment
  @Post('create')
  public async createBlog(@Res() response, @Body() body: CreateCommentDTO) {
    const newComment = await this.commentsService.createComment(body);
    return response.status(HttpStatus.CREATED).json({
      message: 'Comment has been created successfully',
      newComment,
    });
  }
  //function to get all comments by postID
  @Get('all/:postId')
  public async getAllComments(@Res() response, @Param('postId', ParseObjectIdPipe) postId: string) {
    const comments = await this.commentsService.getComments(postId);
    return response.status(HttpStatus.OK).json({
      comments,
    });
  }
  //add Likes to comments
  @Put('like/:postId')
  public async addLike(
    @Res() response,
    @Body() body: CreateCommentLikesDTO,
    @Param('postId', ParseObjectIdPipe) postId: string,
  ) {
    await this.commentsService.likeComment(body, postId);
    return response.status(HttpStatus.OK).json({
      message: 'Post has been updated successfully',
    });
  }
}
