import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Post } from './posts.schema';
import { User } from './users.schema';
import { ReplyComment, ReplyCommentSchema } from './replyComments.schema';

@Schema()
export class Comment {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Post' })
  postId: Post;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  userId: User;

  @Prop({ required: true })
  userName: string;

  @Prop({ required: true })
  profileImage: string;

  @Prop({ required: true })
  comment: string;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ onUpdated: Date.now })
  updatedAt: Date;

  @Prop({ default: 1 })
  status: number;

  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }])
  commentLikes: User[];

  @Prop([ReplyCommentSchema])
  replyComment: ReplyComment[];
}
export const CommentSchema = SchemaFactory.createForClass(Comment);
