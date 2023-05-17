import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserInterface } from 'src/interfaces/user.interface';
import { CreateUserDto } from '../dto/user.dto';
import { ErrorManager } from 'src/utils/error.manager';

@Injectable()
export class UsersService {
  constructor(@InjectModel('blogs') private readonly userModel: Model<UserInterface>) {}

  //This function creates a new user in a database using the provided data and returns the created user.
  async create(body: CreateUserDto): Promise<UserInterface> {
    try {
      const newUser = new this.userModel(body);
      return await newUser.save();
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //This function finds and returns a user by their ID.
  async findOne(userId: string): Promise<UserInterface> {
    try {
      const existUser = await this.userModel.findOne({ userId }).exec();

      if (!existUser) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: 'User not found',
        });
      }

      return existUser;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
}
