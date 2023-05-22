import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { UsersService } from 'src/users/services/users.service';
import { UsersModule } from 'src/users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/schemas/users.schema';

@Module({
  imports: [UsersModule, MongooseModule.forFeature([{ name: 'users', schema: UserSchema }])],
  controllers: [AuthController],
  providers: [AuthService, UsersService],
})
export class AuthModule {}
