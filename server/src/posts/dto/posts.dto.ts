import { IsString, MaxLength, IsOptional, IsEmpty } from 'class-validator';

export class CreatePostsDTO {
  @IsString()
  @MaxLength(30)
  blogId: string;

  @IsString()
  @MaxLength(200)
  title: string;

  @IsString()
  @MaxLength(10000)
  content: string;

  @IsEmpty({ message: 'El campo status no debe tener valor cuando se envía como predeterminado.' })
  status: number;
}

export class CreateUpdatePostDTO {
  @IsEmpty({ message: 'El campo blogId no debe tener valor cuando se envía como predeterminado.' })
  blogId: string;

  @IsString()
  @MaxLength(200)
  @IsOptional()
  title: string;

  @IsString()
  @MaxLength(250)
  @IsOptional()
  images: string;

  @IsString()
  @IsOptional()
  @MaxLength(10000)
  content: string;

  @IsEmpty({ message: 'El campo status no debe tener valor cuando se envía como predeterminado.' })
  status: number;
}
