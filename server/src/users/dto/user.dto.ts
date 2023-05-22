import { IsNotEmpty, IsNumber, IsString, MaxLength, IsEnum, IsOptional, IsEmpty, IsEmail } from 'class-validator';
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

  @IsEmail()
  @MaxLength(40)
  @IsNotEmpty()
  email: string;

  @IsString()
  @MaxLength(70)
  @IsNotEmpty()
  profileImage: string;

  @IsOptional()
  @IsEnum(ROLES)
  @IsEmpty({ message: 'El campo no debe tener valor cuando se envía como predeterminado.' })
  role: ROLES;

  @IsOptional()
  @IsEmpty({ message: 'El campo no debe tener valor cuando se envía como predeterminado.' })
  @IsNumber()
  status: number;

  @IsOptional()
  @MaxLength(150)
  @IsOptional()
  about: string;

  @IsOptional()
  @MaxLength(75)
  @IsString()
  socialNetwork1: string;

  @IsOptional()
  @MaxLength(75)
  @IsString()
  socialNetwork2: string;
}

export class UserUpdateDTO {
  @IsString()
  @MaxLength(16)
  @IsOptional()
  userId: string;

  @IsString()
  @MaxLength(50)
  @IsOptional()
  userName: string;

  @IsString()
  @MaxLength(40)
  @IsOptional()
  email: string;

  @IsString()
  @MaxLength(70)
  @IsOptional()
  profileImage: string;

  @IsOptional()
  @IsEnum(ROLES)
  @IsEmpty({ message: 'El campo no debe tener valor cuando se envía como predeterminado.' })
  role: ROLES;

  @IsOptional()
  @IsEmpty({ message: 'El campo no debe tener valor cuando se envía como predeterminado.' })
  @IsNumber()
  status: number;

  @IsOptional()
  @MaxLength(150)
  @IsOptional()
  about: string;

  @IsOptional()
  @MaxLength(75)
  @IsString()
  socialNetwork1: string;

  @IsOptional()
  @MaxLength(75)
  @IsString()
  socialNetwork2: string;
}
