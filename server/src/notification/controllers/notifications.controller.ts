import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { NotificationsService } from '../services/notifications.service';
import { CreateNotificationsDTO } from '../dto/notifications.dto';
import { ParseObjectIdPipe } from 'src/utils/parse-object-id-pipe.pipe';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  //method to create a new notification
  @Post()
  async create(@Body() notification: CreateNotificationsDTO) {
    return this.notificationsService.createNotification(notification);
  }

  //method to get notifications by user id
  @Get(':user_id')
  async getNotifications(@Param('user_id', ParseObjectIdPipe) user_id: string) {
    return this.notificationsService.getNotificationsByRecipient(user_id);
  }
}
