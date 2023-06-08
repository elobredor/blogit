import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { BlogInterface } from 'src/interfaces/blog.interface';
import { NotificationInterface } from 'src/interfaces/notification.interface';
import { PostsInterface } from 'src/interfaces/post.interface';
import { ErrorManager } from 'src/utils/error.manager';
import { CreateNotificationsDTO } from '../dto/notifications.dto';

@Injectable()
export class NotificationsService {
  constructor(
    @InjectModel('notifications') private readonly notificationModel: Model<NotificationInterface>,
    @InjectModel('blogs') private readonly blogsModel: Model<BlogInterface>,
    @InjectModel('posts') private readonly postsModel: Model<PostsInterface>,
  ) {}

  //function to create a new notification
  public async createNotification(notification: CreateNotificationsDTO) {
    try {
      const getPost = await this.postsModel.findById(notification.postId);

      //check if the post exists
      if (!getPost) {
        throw new ErrorManager({ type: 'NOT_FOUND', message: 'Post not found' });
      }

      //check if the recipient already exists
      if (notification?.recipient === '') {
        const getRecipient = await this.blogsModel.findOne({ _id: getPost.blogId });
        notification.recipient = getRecipient.userId;
      }

      //create the new notification
      const newNotification = await this.notificationModel.create(notification);
      return newNotification;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //function to get notifications by recipient
  public async getNotificationsByRecipient(user_id: string): Promise<NotificationInterface[]> {
    try {
      const userObjectId = new Types.ObjectId(user_id);

      const notifications = await this.notificationModel.aggregate([
        {
          $match: {
            recipient: userObjectId,
          },
        },
        {
          $lookup: {
            from: 'users',
            localField: 'origin',
            foreignField: '_id',
            as: 'sender',
          },
        },
        {
          $unwind: '$sender',
        },
        {
          $sort: {
            createdAt: -1,
          },
        },
        {
          $group: {
            _id: '$_id',
            postId: { $first: '$postId' },
            content: { $first: '$content' },
            origin: { $first: '$origin' },
            originName: { $first: '$sender.userName' },
            originAvatar: { $first: '$sender.profileImage' },
            recipient: { $first: '$recipient' },
            notificationType: { $first: '$notificationType' },
            createdAt: { $first: '$createdAt' },
          },
        },
        {
          $project: {
            updatedAt: 0,
            __v: 0,
            'sender.userId': 0,
            'sender.__v': 0,
            'sender._id': 0,
            'sender.email': 0,
            'sender.role': 0,
            'sender.status': 0,
            'sender.createdAt': 0,
            'sender.updatedAt': 0,
            'sender.socialNetwork1': 0,
            'sender.socialNetwork2': 0,
            'sender.socialNetwork3': 0,
            'sender.about': 0,
            'sender.saved': 0,
          },
        },
      ]);

      return notifications;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
}
