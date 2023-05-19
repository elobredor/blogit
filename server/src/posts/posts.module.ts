import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostsService } from './services/posts.service';
import { PostsController } from './controllers/posts.controller';
import { PostSchema } from 'src/schemas/posts.schema';
import { BlogSchema } from 'src/schemas/blogs.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'posts', schema: PostSchema }]),
    MongooseModule.forFeature([{ name: 'blogs', schema: BlogSchema }]),
  ],
  providers: [PostsService],
  controllers: [PostsController],
})
export class PostsModule {}
