import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  IsEnum,
  IsOptional,
  IsEmpty,
  IsEmail,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { ROLES } from 'src/constants/roles';

class SavedPostDto {
  @IsOptional()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  postId: string;

  @IsOptional()
  @IsString()
  images: string;

  @IsString()
  @MaxLength(500)
  @IsOptional()
  description: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  posts: object[];
}

export class CreateUserDto {
  @IsString()
  @MaxLength(40)
  @IsNotEmpty()
  userId: string;

  @IsString()
  @MaxLength(70)
  @IsNotEmpty()
  userName: string;

  @IsEmail()
  @MaxLength(70)
  @IsNotEmpty()
  email: string;

  @IsString()
  @MaxLength(250)
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
  @MaxLength(300)
  @IsOptional()
  about: string;

  @IsOptional()
  @MaxLength(200)
  @IsString()
  socialNetwork1: string;

  @IsOptional()
  @MaxLength(200)
  @IsString()
  socialNetwork2: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SavedPostDto)
  saved: SavedPostDto[];
}

export class UserUpdateDTO {
  @IsString()
  @MaxLength(25)
  @IsOptional()
  @IsEmpty({ message: 'El campo userId no debe tener valor cuando se envía como predeterminado.' })
  userId: string;

  @IsString()
  @MaxLength(70)
  @IsOptional()
  userName: string;

  @IsString()
  @MaxLength(70)
  @IsOptional()
  @IsEmpty({ message: 'El campo email no debe tener valor cuando se envía como predeterminado.' })
  email: string;

  @IsString()
  @MaxLength(250)
  @IsOptional()
  profileImage: string;

  @IsOptional()
  @IsEnum(ROLES)
  @IsEmpty({ message: 'El campo role no debe tener valor cuando se envía como predeterminado.' })
  role: ROLES;

  @IsOptional()
  @IsEmpty({ message: 'El campo status no debe tener valor cuando se envía como predeterminado.' })
  @IsNumber()
  status: number;

  @IsOptional()
  @MaxLength(300)
  @IsOptional()
  about: string;

  @IsOptional()
  @MaxLength(200)
  @IsString()
  socialNetwork1: string;

  @IsOptional()
  @MaxLength(200)
  @IsString()
  socialNetwork2: string;

  @IsString()
  @MaxLength(30)
  @IsOptional()
  postId: string;

  @IsString()
  @MaxLength(300)
  @IsOptional()
  title: string;

  @IsString()
  @MaxLength(300)
  @IsOptional()
  images: string;

  @IsString()
  @MaxLength(500)
  @IsOptional()
  description: string;

  @IsString()
  @MaxLength(35)
  @IsOptional()
  _id: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SavedPostDto)
  saved: SavedPostDto[];
}
