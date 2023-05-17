import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
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
}
