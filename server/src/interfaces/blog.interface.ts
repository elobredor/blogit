import { Document } from 'mongoose';

export interface BlogInterface extends Document {
  readonly blogId: string;
  readonly userId: string;
  readonly category: string;
}
