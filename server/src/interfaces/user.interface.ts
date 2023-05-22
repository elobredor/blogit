import { Document } from 'mongoose';
import { ROLES } from 'src/constants/roles';

export interface UserInterface extends Document {
  userId: string;
  userName: string;
  email: string;
  profileImage: string;
  role: ROLES;
  status: number;
  createdAt: Date;
  about: string;
  socialNetwork1: string;
  socialNetwork2: string;
}
