import { Body, Controller, Get, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { CommentsService } from '../services/comments.service';
import { CreateCommentDTO } from '../dto/comments.dto';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}
  //function
  @Post('create')
  public async createBlog(@Res() response, @Body() body: CreateCommentDTO) {
    await this.commentsService.createComment(body);
    return response.status(HttpStatus.CREATED).json({
      message: 'Comment has been created successfully',
    });
  }
}
