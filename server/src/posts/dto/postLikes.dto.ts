import { IsString, MaxLength } from 'class-validator';

export class CreatePostsLikesDTO {
  @IsString()
  @MaxLength(30)
  readonly userId: string;
}
