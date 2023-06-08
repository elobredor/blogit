import { Document } from 'mongoose';

export interface NotificationInterface extends Document {
  postId: string;
  content: string;
  recipient: string;
  origin: string;
  notificationType: string;
}
