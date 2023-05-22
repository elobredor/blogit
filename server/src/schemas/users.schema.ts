import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User {
  @Prop()
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
  role: string;

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
}

export const UserSchema = SchemaFactory.createForClass(User);

// Asignar valores al campo fieldName
// createUserDto.fieldName = {
//   postId: 'post_id',
//   categoria: 'categoria',
// };
