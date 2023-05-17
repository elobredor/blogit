import { Comment } from './comment.interface';

export interface Post {
  readonly postId: string;
  readonly title: string;
  readonly content: string;
  readonly images: string[];
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly status: number;
  readonly comments: Comment[];
  readonly postLikes: string[];
  readonly savedPosts: string[];
}
