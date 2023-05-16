import { Blog } from './blog.interface';

export interface User {
  userId: string;
  userName: string;
  email: string;
  profileImage: string;
  role: string;
  status: number;
  createdAt: Date;
  blog: Blog;
}
