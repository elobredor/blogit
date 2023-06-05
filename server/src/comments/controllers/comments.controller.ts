import { Body, Controller, Get, Param, Post, Put, Delete, UseGuards } from '@nestjs/common';
import { CommentsService } from '../services/comments.service';
import { CreateCommentDTO, UpdateCommentDTO } from '../dto/comments.dto';
import { ParseObjectIdPipe } from 'src/utils/parse-object-id-pipe.pipe';
import { CreateCommentLikesDTO } from '../dto/commentLikes.dto';
import { CreateReplyCommentLikesDTO } from '../dto/replyComment.dto';
import { ReplyCommentInterface } from 'src/interfaces/replyComment.interface';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { PublicAccess } from 'src/auth/decorators/public.decorator';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';

@Controller('comments')
@UseGuards(AuthGuard, RolesGuard)
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}
  //function to create a comment
  @Roles('BASIC')
  @Post('create')
  public async createBlog(@Body() body: CreateCommentDTO) {
    const newComment = await this.commentsService.createComment(body);
    return newComment;
  }

  //function to get all comments by postID
  @PublicAccess()
  @Get('all/:postId')
  public async getAllComments(@Param('postId', ParseObjectIdPipe) postId: string) {
    const comments = await this.commentsService.getComments(postId);
    return comments;
  }

  //add Likes to comments
  @Roles('BASIC')
  @Put('like/:postId')
  public async addLike(@Body() body: CreateCommentLikesDTO, @Param('postId', ParseObjectIdPipe) postId: string) {
    await this.commentsService.likeComment(body, postId);
    return { message: 'Post has been updated successfully' };
  }

  //method to reply to a comment
  @Roles('BASIC')
  @Put('reply/:commentId')
  public async replyToComment(
    @Body() body: ReplyCommentInterface,
    @Param('commentId', ParseObjectIdPipe) commentId: string,
  ) {
    await this.commentsService.replyToComment(body, commentId);
    return { message: 'Reply has been created successfully' };
  }

  //method to add/remove a like to a reply
  @Roles('BASIC')
  @Put('reply/like/:commentId')
  public async addRemoveLikeToReply(
    @Body() body: CreateReplyCommentLikesDTO,
    @Param('commentId', ParseObjectIdPipe) commentId: string,
  ) {
    await this.commentsService.likeReplyComment(body, commentId);
    return { message: 'Reply has been updated successfully' };
  }

  //method to update a comment
  @Roles('BASIC')
  @Put('update/:commentId')
  public async updateComment(@Body() body: UpdateCommentDTO, @Param('commentId', ParseObjectIdPipe) commentId: string) {
    const updatedComment = await this.commentsService.updateComment(body, commentId);
    return updatedComment;
  }

  //method to delete a comment
  @Roles('BASIC')
  @Delete('delete/:commentId')
  public async deleteComment(@Param('commentId', ParseObjectIdPipe) commentId: string) {
    await this.commentsService.deleteComment(commentId);
    return { message: 'Comment has been deleted successfully' };
  }

  //method to update a reply
  @Roles('BASIC')
  @Put('reply-update/:replyId')
  public async updateReply(@Body() body: UpdateCommentDTO, @Param('replyId', ParseObjectIdPipe) replyId: string) {
    await this.commentsService.updateReplyComment(body, replyId);
    return { message: 'Reply has been updated successfully' };
  }

  //method to delete a reply
  @Roles('BASIC')
  @Delete('reply-delete/:replyId')
  public async deleteReply(@Param('replyId', ParseObjectIdPipe) replyId: string) {
    await this.commentsService.deleteReplyComment(replyId);
    return { message: 'Reply comment has been deleted successfully' };
  }
}
