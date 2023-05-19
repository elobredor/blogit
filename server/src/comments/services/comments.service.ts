import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CommentInterface } from 'src/interfaces/comment.interface';
import { PostsInterface } from 'src/interfaces/post.interface';
import { CreateCommentDTO } from '../dto/comments.dto';
import { ErrorManager } from 'src/utils/error.manager';
import { CreateCommentLikesDTO } from '../dto/commentLikes.dto';

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
      await this.postsModel.findByIdAndUpdate({ _id: postId }, { $push: { comments: body } });
      return;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
  //This function returns all comments for a given post in a database.
  public async getComments(postId: string): Promise<CommentInterface[]> {
    try {
      const post = await this.postsModel.findById(postId);
      console.log(post);
      //If the user is not found, throw an error.
      if (!post) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `Post with ID: ${postId} not found`,
        });
      }
      //If the user is found, return all comments for that post.
      return post.comments;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
  //like/disLike a comment
  public async likeComment(body: CreateCommentLikesDTO, postId: string): Promise<CommentInterface> {
    const { userId, commentId } = body;
    try {
      const postComment = await this.postsModel.findById(postId);
      //If the post is not found, throw an error.
      if (!postComment) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `Comment with ID: ${postId} not found`,
        });
      }
      //If the post is found, find the comment and update it.
      const comment = postComment.comments.find((c) => c._id.toString() === commentId);
      //verify if the user has already liked the comment
      if (!comment?.commentLikes.includes(userId)) {
        //if the user has not liked the comment, add the user to the commentLikes array.
        comment.commentLikes.push(userId);
        await postComment.save();
        return;
      } else {
        //if the user has already liked the comment, remove the user from the commentLikes array.
        comment.commentLikes = comment.commentLikes.filter((id) => id.toString() !== userId);
        await postComment.save();
        return;
      }
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
}
