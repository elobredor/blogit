import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { UsersService } from 'src/users/services/users.service';
import { UsersModule } from 'src/users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/schemas/users.schema';
import { BlogSchema } from 'src/schemas/blogs.schema';
import { PostSchema } from 'src/schemas/posts.schema';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forFeature([{ name: 'users', schema: UserSchema }]),
    MongooseModule.forFeature([{ name: 'blogs', schema: BlogSchema }]),
    MongooseModule.forFeature([{ name: 'posts', schema: PostSchema }]),
  ],
  controllers: [AuthController],
  providers: [AuthService, UsersService],
})
export class AuthModule {}
