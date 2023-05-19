import { Document } from 'mongoose';
import { CommentInterface } from './comment.interface';

export interface PostsInterface extends Document {
  readonly postId: string;
  readonly blogId: string;
  readonly title: string;
  readonly content: string;
  readonly images: string[];
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly status: number;
  readonly postLikes: string[];
  comments: CommentInterface[];
}
