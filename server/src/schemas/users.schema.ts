import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { ROLES } from 'src/constants/roles';

@Schema()
export class User {
  @Prop({ default: null })
  _id: string;

  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  userName: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  profileImage: string;

  @Prop({ default: 'BASIC' })
  role: ROLES;

  @Prop({ default: 1 })
  status: number;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ type: String })
  about: string;

  @Prop({ type: String })
  socialNetwork1: string;

  @Prop({ type: String })
  socialNetwork2: string;

  @Prop([
    { title: String, description: String, posts: [{ postId: String, images: String, _id: mongoose.Types.ObjectId }] },
  ])
  saved: { title: string; description: string; posts: object[] }[];
}

export const UserSchema = SchemaFactory.createForClass(User);
