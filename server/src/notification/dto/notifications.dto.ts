import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateNotificationsDTO {
  @IsNotEmpty()
  @IsString()
  postId: string;

  @IsNotEmpty()
  @IsString()
  content: string;

  @IsOptional()
  @IsString()
  recipient: string;

  @IsNotEmpty()
  @IsString()
  origin: string;

  @IsNotEmpty()
  @IsString()
  notificationType: string;
}
