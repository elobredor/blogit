import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NotificationsService } from './services/notifications.service';
import { NotificationsController } from './controllers/notifications.controller';
import { NotificationSchema } from 'src/schemas/notifications.schema';
import { BlogSchema } from 'src/schemas/blogs.schema';
import { PostSchema } from 'src/schemas/posts.schema';

@Global()
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'notifications', schema: NotificationSchema }]),
    MongooseModule.forFeature([{ name: 'blogs', schema: BlogSchema }]),
    MongooseModule.forFeature([{ name: 'posts', schema: PostSchema }]),
  ],
  providers: [NotificationsService],
  controllers: [NotificationsController],
  exports: [NotificationsService],
})
export class NotificationModule {}
