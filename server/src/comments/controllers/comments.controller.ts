import { Body, Controller, Get, HttpStatus, Param, Post, Res, Put } from '@nestjs/common';
import { Response } from 'express';
import { CommentsService } from '../services/comments.service';
import { CreateCommentDTO } from '../dto/comments.dto';
import { ParseObjectIdPipe } from 'src/utils/parse-object-id-pipe.pipe';
import { CreateCommentLikesDTO } from '../dto/commentLikes.dto';
import { CreateReplyCommentDTO, CreateReplyCommentLikesDTO } from '../dto/replyComment.dto';
import { ReplyCommentInterface } from 'src/interfaces/replyComment.interface';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}
  //function to create a comment
  @Post('create')
  public async createBlog(@Res() response: Response, @Body() body: CreateCommentDTO) {
    const newComment = await this.commentsService.createComment(body);
    return response.status(HttpStatus.CREATED).json({
      message: 'Comment has been created successfully',
      newComment,
    });
  }
  //function to get all comments by postID
  @Get('all/:postId')
  public async getAllComments(@Res() response: Response, @Param('postId', ParseObjectIdPipe) postId: string) {
    const comments = await this.commentsService.getComments(postId);
    return response.status(HttpStatus.OK).json({
      comments,
    });
  }
  //add Likes to comments
  @Put('like/:postId')
  public async addLike(
    @Res() response: Response,
    @Body() body: CreateCommentLikesDTO,
    @Param('postId', ParseObjectIdPipe) postId: string,
  ) {
    await this.commentsService.likeComment(body, postId);
    return response.status(HttpStatus.OK).json({
      message: 'Post has been updated successfully',
    });
  }
  //method to reply to a comment
  @Put('reply/:commentId')
  public async replyToComment(
    @Res() response: Response,
    @Body() body: ReplyCommentInterface,
    @Param('commentId', ParseObjectIdPipe) commentId: string,
  ) {
    await this.commentsService.replyToComment(body, commentId);
    return response.status(HttpStatus.OK).json({
      message: 'Reply has been created successfully',
    });
  }
  //method to add/remove a like to a reply
  @Put('reply/like/:commentId')
  public async addRemoveLikeToReply(
    @Res() response: Response,
    @Body() body: CreateReplyCommentLikesDTO,
    @Param('commentId', ParseObjectIdPipe) commentId: string,
  ) {
    await this.commentsService.likeReplyComment(body, commentId);
    return response.status(HttpStatus.OK).json({
      message: 'Reply has been updated successfully',
    });
  }
}
