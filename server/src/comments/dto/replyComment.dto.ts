import { IsEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateReplyCommentDTO {
  @IsString()
  @MaxLength(30)
  userId: string;

  @IsString()
  @MaxLength(70)
  userName: string;

  @IsString()
  @MaxLength(250)
  profileImage: string;

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

export class UpdateReplyCommentDTO {
  @IsEmpty({ message: 'El campo userId no debe tener valor cuando se envía como predeterminado.' })
  userId: string;

  @IsEmpty({ message: 'El campo userName no debe tener valor cuando se envía como predeterminado.' })
  userName: string;

  @IsEmpty({ message: 'El campo profileImage no debe tener valor cuando se envía como predeterminado.' })
  profileImage: string;

  @IsOptional()
  @IsString()
  @MaxLength(1000)
  comment: string;
}
