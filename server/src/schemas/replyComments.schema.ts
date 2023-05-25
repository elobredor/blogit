import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from './users.schema';

@Schema()
export class ReplyComment {
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

  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }])
  commentLikes: User[];
}
export const ReplyCommentSchema = SchemaFactory.createForClass(ReplyComment);
