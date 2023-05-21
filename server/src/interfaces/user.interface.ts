import { Document } from 'mongoose';

export interface UserInterface extends Document {
  userId: string;
  userName: string;
  email: string;
  profileImage: string;
  role: string;
  status: number;
  createdAt: Date;
  about: string;
  socialNetwork1: string;
  socialNetwork2: string;
}
