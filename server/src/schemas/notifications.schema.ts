import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from './users.schema';
import { Post } from './posts.schema';

@Schema()
export class Notification {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Post' })
  postId: Post;

  @Prop({ type: String })
  content: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  recipient: User;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  origin: User;

  @Prop({ type: String })
  notificationType: string;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ onUpdated: Date.now })
  updatedAt: Date;
}

export const NotificationSchema = SchemaFactory.createForClass(Notification);
