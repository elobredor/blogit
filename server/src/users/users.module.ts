import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { UserSchema } from 'src/schemas/users.schema';
import { BlogSchema } from 'src/schemas/blogs.schema';
import { PostSchema } from 'src/schemas/posts.schema';

@Global()
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'users', schema: UserSchema }]),
    MongooseModule.forFeature([{ name: 'blogs', schema: BlogSchema }]),
    MongooseModule.forFeature([{ name: 'posts', schema: PostSchema }]),
  ],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
