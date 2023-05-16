import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';
export class CreateBlogDto {
  @IsString()
  @MaxLength(50)
  @IsNotEmpty()
  userName: string;

  @IsString()
  @MaxLength(40)
  @IsNotEmpty()
  email: string;

  @IsString()
  @MaxLength(70)
  @IsNotEmpty()
  profileImage: string;

  @IsNumber()
  @MaxLength(1)
  @IsNotEmpty()
  role: number;

  //continue here
}
