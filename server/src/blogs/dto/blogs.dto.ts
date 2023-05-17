import { IsString, MaxLength } from 'class-validator';

export class CreateBlogsDTO {
  @IsString()
  @MaxLength(30)
  readonly category: string;
}
