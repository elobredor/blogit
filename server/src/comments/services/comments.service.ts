import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CommentInterface } from 'src/interfaces/comment.interface';
import { PostsInterface } from 'src/interfaces/post.interface';
import { CreateCommentDTO, UpdateCommentDTO } from '../dto/comments.dto';
import { ErrorManager } from 'src/utils/error.manager';
import { CreateCommentLikesDTO } from '../dto/commentLikes.dto';
import { ReplyCommentInterface } from 'src/interfaces/replyComment.interface';
import { CreateReplyCommentLikesDTO, UpdateReplyCommentDTO } from '../dto/replyComment.dto';

@Injectable()
export class CommentsService {
  constructor(@InjectModel('posts') private readonly postsModel: Model<PostsInterface>) {}
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
  //this function replies to a comment
  public async replyToComment(body: ReplyCommentInterface, commentId: string): Promise<ReplyCommentInterface> {
    const commentObjectId = new Types.ObjectId(commentId);
    try {
      const comments = await this.postsModel.findOne({ comments: { $elemMatch: { _id: commentObjectId } } });
      //If the comment is not found, throw an error.
      if (!comments) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `Comment with ID: ${commentId} not found`,
        });
      }

      //If the comment is found, find the comment and update it.
      const comment = comments.comments.find((c) => c._id.toString() === commentId);
      comment.replyComment.push(body);
      await comments.save();
      return;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
  //this function add/remove likes from reply comments
  public async likeReplyComment(body: CreateReplyCommentLikesDTO, commentId: string): Promise<ReplyCommentInterface> {
    const { userId, replyCommentId } = body;
    try {
      const comments = await this.postsModel.findOne({ comments: { $elemMatch: { _id: commentId } } });
      //If the comment is not found, throw an error.
      if (!comments) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `Comment with ID: ${commentId} not found`,
        });
      }
      //If the comment is found, find the comment and update it.
      const comment = comments.comments.find((c) => c._id.toString() === commentId);

      //If the comment is not found, throw an error.
      if (!comment) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `Comment with ID: ${commentId} not found`,
        });
      }

      const replyComment = comment.replyComment.find((c) => c._id.toString() === replyCommentId);
      //verify if the user has already liked the comment
      if (!replyComment?.commentLikes.includes(userId)) {
        //if the user has not liked the comment, add the user to the commentLikes array.
        replyComment?.commentLikes.push(userId);
        await comments.save();
        return;
      } else {
        //if the user has already liked the comment, remove the user from the commentLikes array.
        replyComment.commentLikes = replyComment?.commentLikes.filter((id) => id.toString() !== userId);
        await comments.save();
        return;
      }
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
  //This function update a comment.
  public async updateComment(body: UpdateCommentDTO, commentId: string): Promise<CommentInterface> {
    try {
      const comments = await this.postsModel.findOne({ comments: { $elemMatch: { _id: commentId } } });
      //If the comment is not found, throw an error.
      if (!comments) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `Comment with ID: ${commentId} not found`,
        });
      }
      //If the comment is found, find the comment and update it.
      const comment = comments.comments.find((c) => c._id.toString() === commentId);
      comment.comment = body.comment;
      await comments.save();
      return comment;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
  //This function delete a comment.
  public async deleteComment(commentId: string): Promise<CommentInterface> {
    try {
      const comments = await this.postsModel.findOne({ comments: { $elemMatch: { _id: commentId } } });

      //If the comment is not found, throw an error.
      if (!comments) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `Comment with ID: ${commentId} not found`,
        });
      }
      //If the comment is found, find the comment and update it.
      comments.comments = comments.comments.filter((c) => c._id.toString() !== commentId);
      await comments.save();
      return;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
  //This function update a reply comment.
  public async updateReplyComment(body: UpdateReplyCommentDTO, replyId: string): Promise<ReplyCommentInterface> {
    const comments = await this.postsModel.findOne({
      comments: { $elemMatch: { replyComment: { $elemMatch: { _id: replyId } } } },
    });
    //If the comment is not found, throw an error.
    if (!comments) {
      throw new ErrorManager({
        type: 'NOT_FOUND',
        message: `Comment with ID: ${replyId} not found`,
      });
    }
    //If the comment is found, find the comment and update it.
    const replyComment = comments.comments.find((c) => c.replyComment.find((r) => r._id.toString() === replyId));
    const replyCommentId = replyComment.replyComment.find((r) => r._id.toString() === replyId);
    replyCommentId.comment = body.comment;
    await comments.save();
    return;
  }
  //This function delete a reply comment.
  public async deleteReplyComment(replyId: string): Promise<ReplyCommentInterface> {
    const comments = await this.postsModel.findOne({
      comments: { $elemMatch: { replyComment: { $elemMatch: { _id: replyId } } } },
    });
    //If the comment is not found, throw an error.
    if (!comments) {
      throw new ErrorManager({
        type: 'NOT_FOUND',
        message: `Comment with ID: ${replyId} not found`,
      });
    }
    //If the comment is found, find the comment and update it.
    const replyComment = comments.comments.find((c) => c.replyComment.find((r) => r._id.toString() === replyId));
    replyComment.replyComment = replyComment.replyComment.filter((r) => r._id.toString() !== replyId);
    await comments.save();
    return;
  }
}
