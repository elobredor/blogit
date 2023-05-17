import { BlogInterface } from './blog.interface';
import { Document } from 'mongoose';

export interface UserInterface extends Document {
  readonly userId: string;
  readonly userName: string;
  readonly email: string;
  readonly profileImage: string;
  readonly role: string;
  readonly status: number;
  readonly createdAt: Date;
  readonly blog: BlogInterface;
}
