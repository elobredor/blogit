import { Global, Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { UsersService } from 'src/users/services/users.service';
import { UsersModule } from 'src/users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from '../schemas/users.schema';
import { BlogSchema } from '../schemas/blogs.schema';
import { PostSchema } from '../schemas/posts.schema';
import { CommentSchema } from '../schemas/comments.schema';
import { ReplyCommentSchema } from '../schemas/replyComments.schema';
import { AuthGuard } from './guards/auth.guard';
import { RolesGuard } from './guards/roles.guard';
import { jwtConstants } from 'src/constants/jwtKey';

@Global()
@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '4h' },
    }),
    MongooseModule.forFeature([{ name: 'users', schema: UserSchema }]),
    MongooseModule.forFeature([{ name: 'blogs', schema: BlogSchema }]),
    MongooseModule.forFeature([{ name: 'posts', schema: PostSchema }]),
    MongooseModule.forFeature([{ name: 'comments', schema: CommentSchema }]),
    MongooseModule.forFeature([{ name: 'replyComments', schema: ReplyCommentSchema }]),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    {
      provide: AuthGuard,
      useClass: AuthGuard,
    },
    {
      provide: RolesGuard,
      useClass: RolesGuard,
    },
  ],
})
export class AuthModule {}
