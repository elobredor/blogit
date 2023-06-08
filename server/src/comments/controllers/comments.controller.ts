import { Body, Controller, Get, HttpStatus, Param, Post, Res, Put, Delete } from '@nestjs/common';
import { Response } from 'express';
import { CommentsService } from '../services/comments.service';
import { CreateCommentDTO, UpdateCommentDTO } from '../dto/comments.dto';
import { ParseObjectIdPipe } from 'src/utils/parse-object-id-pipe.pipe';
import { CreateCommentLikesDTO } from '../dto/commentLikes.dto';
import { CreateReplyCommentLikesDTO } from '../dto/replyComment.dto';
import { ReplyCommentInterface } from 'src/interfaces/replyComment.interface';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}
  //function to create a comment
  @Post('create')
<<<<<<< HEAD
  public async createBlog(@Res() response: Response, @Body() body: CreateCommentDTO) {
    const newComment = await this.commentsService.createComment(body);
    return response.status(HttpStatus.CREATED).json({
      message: 'Comment has been created successfully',
      newComment,
    });
=======
  public async createBlog(@Body() body: CreateCommentDTO) {
    await this.commentsService.createComment(body);
    return { message: 'Comment has been created successfully' };
>>>>>>> 9868046a722c0344919fe04246d04b5ad3ed8b4f
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
  //method to update a comment
  @Put('update/:commentId')
  public async updateComment(
    @Res() response: Response,
    @Body() body: UpdateCommentDTO,
    @Param('commentId', ParseObjectIdPipe) commentId: string,
  ) {
    const updatedComment = await this.commentsService.updateComment(body, commentId);
    return response.status(HttpStatus.OK).json({
      message: 'Comment has been updated successfully',
      updatedComment,
    });
  }
  //method to delete a comment
  @Delete('delete/:commentId')
  public async deleteComment(@Res() response: Response, @Param('commentId', ParseObjectIdPipe) commentId: string) {
    await this.commentsService.deleteComment(commentId);
    return response.status(HttpStatus.OK).json({
      message: 'Comment has been deleted successfully',
    });
  }
  //method to update a reply
  @Put('reply-update/:replyId')
  public async updateReply(
    @Res() response: Response,
    @Body() body: UpdateCommentDTO,
    @Param('replyId', ParseObjectIdPipe) replyId: string,
  ) {
    await this.commentsService.updateReplyComment(body, replyId);
    return response.status(HttpStatus.OK).json({
      message: 'Reply has been updated successfully',
    });
  }
  //method to delete a reply
  @Delete('reply-delete/:replyId')
  public async deleteReply(@Res() response: Response, @Param('replyId', ParseObjectIdPipe) replyId: string) {
    await this.commentsService.deleteReplyComment(replyId);
    return response.status(HttpStatus.OK).json({
      message: 'Reply comment has been deleted successfully',
    });
  }
}
