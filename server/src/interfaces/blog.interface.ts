import { Post } from './post.interface';

export interface Blog {
  readonly blogId: string;
  readonly category: string;
  readonly posts: Post[];
}
