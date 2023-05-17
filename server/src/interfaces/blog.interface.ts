import { Document } from 'mongoose';
import { Post } from './post.interface';

export interface BlogInterface extends Document {
  readonly category: string;
  readonly posts: Post[];
}
