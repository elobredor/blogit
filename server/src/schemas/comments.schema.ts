import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Post } from './posts.schema';
import { User } from './users.schema';

@Schema()
export class Comment {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Post' })
  postId: Post;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  userId: User;

  @Prop({ required: true })
  userName: string;

  @Prop({ required: true })
  readonly comment: string;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ onUpdated: Date.now })
  updatedAt: Date;

  @Prop({ default: 1 })
  status: number;
}
export const CommentSchema = SchemaFactory.createForClass(Comment);