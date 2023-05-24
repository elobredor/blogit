import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ROLES } from 'src/constants/roles';

@Schema()
export class User {
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

  @Prop([{ title: String, posts: [String] }])
  saved: { title: string; posts: string[] }[];
}

export const UserSchema = SchemaFactory.createForClass(User);
