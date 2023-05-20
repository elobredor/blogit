import { IsString, MaxLength, IsNumber } from 'class-validator';

export class CreatePostsDTO {
  @IsString()
  @MaxLength(30)
  blogId: string;

  @IsString()
  @MaxLength(100)
  title: string;

  @IsString()
  @MaxLength(1000)
  content: string;

  @IsNumber()
  status: number;
}
