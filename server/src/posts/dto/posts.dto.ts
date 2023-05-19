import { IsString, MaxLength, IsNumber } from 'class-validator';

export class CreatePostsDTO {
  @IsString()
  @MaxLength(30)
  readonly blogId: string;

  @IsString()
  @MaxLength(50)
  readonly title: string;

  @IsString()
  @MaxLength(500)
  readonly content: string;

  @IsNumber()
  readonly status: number;
}
