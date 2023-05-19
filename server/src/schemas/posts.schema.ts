import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Blog } from './blogs.schema';
import { User } from './users.schema';

@Schema()
export class Post {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Blog' })
  blogId: Blog;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  content: string;

  @Prop([String])
  images: string[];

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ onUpdated: Date.now })
  updatedAt: Date;

  @Prop({ default: 1 })
  status: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  postLikes: User[];
}

export const PostSchema = SchemaFactory.createForClass(Post);
