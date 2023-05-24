import { IsString, MaxLength, IsNumber, IsOptional } from 'class-validator';

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

  @IsOptional()
  @IsNumber()
  status: number;
}
