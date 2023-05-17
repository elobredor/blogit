export interface Comment {
  readonly commentId: string;
  readonly userId: string;
  readonly userName: string;
  readonly comment: string;
  readonly commentLikes: string[];
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly status: number;
}
