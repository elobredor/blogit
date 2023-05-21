import { Body, Controller, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { CreateUserDto } from '../dto/user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  /* This is a method in a NestJS controller that handles a POST request to create a new user. */
  @Post('create')
  public async create(@Res() response, @Body() body: CreateUserDto) {
    const newUser = await this.usersService.create(body);
    return response.status(HttpStatus.CREATED).json({
      message: 'User has been created successfully',
      newUser,
    });
  }

  /* This is a method in a NestJS controller that handles a GET request to retrieve a user by their UserID.*/
  @Get(':userId')
  public async getStudent(@Res() response, @Param('userId') userId: string) {
    const userExist = await this.usersService.findOne(userId);
    return response.status(HttpStatus.OK).json({
      user: userExist,
    });
  }
  /* This is a method in a NestJS controller that handles a GET request to retrieve usersProfile.*/
  @Get('profile/:userId')
  public async getProfile(@Res() response, @Param('userId') userId: string) {
    const usersProfile = await this.usersService.getUserProfile(userId);
    return response.status(HttpStatus.OK).json({
      usersProfile,
    });
  }
  //this is a method in NestJs controller that update a user
  @Put('update/:userId')
  public async updateUser(@Res() response, @Param('userId') userId: string, @Body() body: CreateUserDto) {
    const updatedUser = await this.usersService.updateUser(userId, body);
    return response.status(HttpStatus.OK).json({
      message: 'User has been successfully updated',
      updatedUser,
    });
  }
}
