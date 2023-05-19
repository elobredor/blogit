import { IsString, MaxLength } from 'class-validator';

export class CreateCommentDTO {
  @IsString()
  @MaxLength(30)
  readonly postId: string;

  @IsString()
  @MaxLength(30)
  readonly userId: string;

  @IsString()
  @MaxLength(50)
  readonly userName: string;

  @IsString()
  @MaxLength(200)
  comment: string;
}
