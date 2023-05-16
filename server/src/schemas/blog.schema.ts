import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Blog } from 'src/interfaces/blog.interface';
import { User } from 'src/interfaces/user.interface';

@Schema()
export class UserDocument extends Document implements User {
  @Prop({ type: MongooseSchema.Types.ObjectId })
  userId: string;

  @Prop({ required: true })
  userName: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  profileImage: string;

  @Prop({ required: true })
  role: string;

  @Prop({ required: true })
  status: number;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ type: MongooseSchema.Types.Mixed })
  blog: Blog;
}

export const BlogSchema = SchemaFactory.createForClass(UserDocument);
