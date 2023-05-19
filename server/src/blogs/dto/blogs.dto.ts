import { IsEnum, IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { Categories } from 'src/constants/categories';

export class CreateBlogsDTO {
  @IsString()
  @MaxLength(30)
  readonly userId: string;

  @IsEnum(Categories)
  @IsNotEmpty()
  readonly category: Categories;
}
