import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MONGODB_URI } from './config/data.source';
import { BlogSchema } from './schemas/blog.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV.trim()}.env`,
      isGlobal: true,
    }),
    MongooseModule.forRoot(MONGODB_URI),
    MongooseModule.forFeature([{ name: 'blogs', schema: BlogSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
