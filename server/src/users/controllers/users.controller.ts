import { Body, Controller, Get, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { CreateUserDto } from '../dto/user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  /* This is a method in a NestJS controller that handles a POST request to create a new user. */
  @Post('create')
  async create(@Res() response, @Body() body: CreateUserDto) {
    const newUser = await this.usersService.create(body);
    return response.status(HttpStatus.CREATED).json({
      message: 'User has been created successfully',
      newUser,
    });
  }

  /* This is a method in a NestJS controller that handles a GET request to retrieve a user by their UserID.*/
  @Get(':id')
  async getStudent(@Res() response, @Param('id') userId: string) {
    const userExist = await this.usersService.findOne(userId);
    return response.status(HttpStatus.OK).json({
      user: userExist,
    });
  }
}
