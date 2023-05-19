import { Document } from 'mongoose';

export interface CommentInterface extends Document {
  readonly commentId: string;
  readonly postId: string;
  readonly userId: string;
  readonly userName: string;
  readonly comment: string;
  commentLikes: string[];
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly status: number;
}
