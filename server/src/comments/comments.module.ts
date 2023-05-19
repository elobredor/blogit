import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CommentsController } from './controllers/comments.controller';
import { CommentsService } from './services/comments.service';
import { CommentSchema } from 'src/schemas/comments.schema';
import { PostSchema } from 'src/schemas/posts.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'comments', schema: CommentSchema }]),
    MongooseModule.forFeature([{ name: 'posts', schema: PostSchema }]),
  ],
  controllers: [CommentsController],
  providers: [CommentsService],
})
export class CommentsModule {}
