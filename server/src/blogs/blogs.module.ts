import { Module, Global } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogsService } from './services/blogs.service';
import { BlogsController } from './controllers/blogs.controller';
import { BlogSchema } from 'src/schemas/blogs.schema';

@Global()
@Module({
  imports: [MongooseModule.forFeature([{ name: 'blogs', schema: BlogSchema }])],
  controllers: [BlogsController],
  providers: [BlogsService],
})
export class BlogsModule {}
