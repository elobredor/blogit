import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CommentInterface } from 'src/interfaces/comment.interface';
import { PostsInterface } from 'src/interfaces/post.interface';
import { CreateCommentDTO } from '../dto/comments.dto';
import { ErrorManager } from 'src/utils/error.manager';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel('posts') private readonly postsModel: Model<PostsInterface>,
    @InjectModel('comments') private readonly commentsModel: Model<CommentInterface>,
  ) {}
  //This function creates a new comment in a database using the provided data and returns the created comment.
  public async createComment(body: CreateCommentDTO): Promise<CommentInterface> {
    const { postId } = body;
    try {
      const post = await this.postsModel.findById(postId);

      //If the user is not found, throw an error.
      if (!post) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `Post with ID: ${postId} not found`,
        });
      }
      //If the user is found, create a new blog and save it to the database.
      const newComment = new this.commentsModel(body);
      return await newComment.save();
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
}
