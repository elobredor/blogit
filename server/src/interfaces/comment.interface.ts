export interface Comment {
  commentId: string;
  userId: string;
  userName: string;
  comment: string;
  commentLikes: string[];
  createdAt: Date;
  updatedAt: Date;
  status: number;
}
