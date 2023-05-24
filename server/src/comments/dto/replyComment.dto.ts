import { IsString, MaxLength } from 'class-validator';

export class CreateReplyCommentDTO {
  @IsString()
  @MaxLength(30)
  userId: string;

  @IsString()
  @MaxLength(70)
  userName: string;

  @IsString()
  @MaxLength(1000)
  comment: string;
}

export class CreateReplyCommentLikesDTO {
  @IsString()
  @MaxLength(30)
  userId: string;

  @IsString()
  @MaxLength(30)
  replyCommentId: string;
}
