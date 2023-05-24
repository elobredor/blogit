import { Document } from 'mongoose';

export interface ReplyCommentInterface extends Document {
  userId: string;
  userName: string;
  comment: string;
  commentLikes: string[];
  createdAt: Date;
  updatedAt: Date;
  status: number;
}
