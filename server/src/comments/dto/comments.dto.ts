import { IsEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

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
  @MaxLength(250)
  profileImage: string;

  @IsString()
  @MaxLength(1000)
  comment: string;
}

export class UpdateCommentDTO {
  @IsString()
  @MaxLength(30)
  @IsOptional()
  @IsEmpty({ message: 'El campo postId no debe tener valor cuando se envía como predeterminado.' })
  postId: string;

  @IsString()
  @MaxLength(30)
  @IsOptional()
  @IsEmpty({ message: 'El campo userId no debe tener valor cuando se envía como predeterminado.' })
  userId: string;

  @IsString()
  @MaxLength(50)
  @IsOptional()
  @IsEmpty({ message: 'El campo userName no debe tener valor cuando se envía como predeterminado.' })
  userName: string;

  @IsString()
  @MaxLength(250)
  @IsOptional()
  @IsEmpty({ message: 'El campo profileImage no debe tener valor cuando se envía como predeterminado.' })
  profileImage: string;

  @IsString()
  @MaxLength(1000)
  comment: string;
}
