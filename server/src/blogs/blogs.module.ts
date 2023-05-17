import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogsService } from './services/blogs.service';
import { BlogsController } from './controllers/blogs.controller';
import { BlogSchema } from 'src/schemas/blog.schema';
import { UsersService } from 'src/users/services/users.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'blogs', schema: BlogSchema }])],
  controllers: [BlogsController],
  providers: [BlogsService, UsersService],
})
export class BlogsModule {}
