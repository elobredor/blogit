import { IsNotEmpty, IsNumber, IsString, MaxLength, IsEnum } from 'class-validator';
import { ROLES } from 'src/constants/roles';
export class CreateUserDto {
  @IsString()
  @MaxLength(16)
  @IsNotEmpty()
  userId: string;

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

  @IsEnum(ROLES)
  @IsNotEmpty()
  role: ROLES;

  @IsNumber()
  @IsNotEmpty()
  status: number;

  //continue here
}
