import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema } from 'mongoose';
import { BlogInterface } from 'src/interfaces/blog.interface';

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

  @Prop({ required: true })
  role: string;

  @Prop({ default: 1 })
  status: number;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ type: MongooseSchema.Types.Mixed })
  blog: BlogInterface;
}

export const BlogSchema = SchemaFactory.createForClass(User);
