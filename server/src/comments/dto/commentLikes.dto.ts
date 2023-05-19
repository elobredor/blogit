import { IsString, MaxLength } from 'class-validator';

export class CreateCommentLikesDTO {
  @IsString()
  @MaxLength(30)
  readonly userId: string;

  @IsString()
  @MaxLength(30)
  commentId: string;
}
