import { Post } from './post.interface';

export interface Blog {
  blogId: string;
  category: string;
  posts: Post[];
}
