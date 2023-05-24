import { IsString, MaxLength } from 'class-validator';

export class CreateCommentDTO {
  @IsString()
  @MaxLength(30)
  postId: string;

  @IsString()
  @MaxLength(30)
  userId: string;

  @IsString()
  @MaxLength(50)
  userName: string;

  @IsString()
  @MaxLength(1000)
  comment: string;
}
