import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { BlogSchema } from 'src/schemas/blog.schema';

@Global()
@Module({
  imports: [MongooseModule.forFeature([{ name: 'blogs', schema: BlogSchema }])],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
