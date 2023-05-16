import { Comment } from './comment.interface';

export interface Post {
  postId: string;
  title: string;
  content: string;
  images: string[];
  createdAt: Date;
  updatedAt: Date;
  status: number;
  comments: Comment[];
  postLikes: string[];
  savedPosts: string[];
}
