import { Document } from 'mongoose';
import { ReplyCommentInterface } from './replyComment.interface';

export interface CommentInterface extends Document {
  commentId: string;
  postId: string;
  userId: string;
  userName: string;
  profileImage: string;
  comment: string;
  commentLikes: string[];
  createdAt: Date;
  updatedAt: Date;
  status: number;
  replyComment: ReplyCommentInterface[];
}
