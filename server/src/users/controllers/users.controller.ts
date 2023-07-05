import { Body, Controller, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { Response } from 'express';
import { UsersService } from '../services/users.service';
import { CreateUserDto, UserUpdateDTO } from '../dto/user.dto';
import { ParseObjectIdPipe } from 'src/utils/parse-object-id-pipe.pipe';

@Controller('users')
//@UseGuards(AuthGuard, RolesGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  /* This is a method in a NestJS controller that handles a POST request to create a new user. */
  //@PublicAccess()
  @Post('create')
  public async create(@Res() response: Response, @Body() body: CreateUserDto) {
    const newUser = await this.usersService.create(body);
    return response.status(HttpStatus.CREATED).json({
      message: 'User has been created successfully',
      newUser,
    });
  }

  /* This is a method in a NestJS controller that handles a GET request to retrieve a user by their UserID.*/
  @Get(':userId')
  public async getStudent(@Res() response: Response, @Param('userId') userId: string) {
    const userExist = await this.usersService.findOne(userId);
    return response.status(HttpStatus.OK).json({
      user: userExist,
    });
  }

  /* This is a method in a NestJS controller that handles a GET request to retrieve usersProfile.*/
  @Get('profile/:userId')
  public async getProfile(@Res() response: Response, @Param('userId') userId: string) {
    const usersProfile = await this.usersService.getUserProfile(userId);
    return response.status(HttpStatus.OK).json({
      usersProfile,
    });
  }

  //this is a method in NestJs controller that update a user
  @Put('update/:userId')
  public async updateUser(@Res() response: Response, @Param('userId') userId: string, @Body() body: UserUpdateDTO) {
    await this.usersService.updateUser(userId, body);
    return response.status(HttpStatus.OK).json({
      message: 'User has been successfully updated',
    });
  }

  //method to save posts
  @Put('saved/:userId')
  public async savePost(@Res() response: Response, @Param('userId') userId: string, @Body() body: UserUpdateDTO) {
    const savedPost = await this.usersService.savePosts(userId, body);
    return response.status(HttpStatus.OK).json({
      message: 'Post has been successfully saved',
      savedPost,
    });
  }

  //method to delete saved posts
  @Put('delete-saved/:userId')
  public async deleteSaved(@Res() response: Response, @Param('userId') userId: string, @Body() body: UserUpdateDTO) {
    const deletedSavedPost = await this.usersService.deleteSavedPost(userId, body);
    return response.status(HttpStatus.OK).json({
      message: 'Post has been successfully deleted',
      deletedSavedPost,
    });
  }

  //method to change status of user
  @Put('status/:userId')
  public async changeStatus(@Res() response: Response, @Param('userId') userId: string) {
    await this.usersService.changeStatus(userId);
    return response.status(HttpStatus.OK).json({
      message: 'Status has been successfully changed',
    });
  }

  //method to enable user
  @Put('enable/:userId')
  public async enableUser(@Res() response: Response, @Param('userId') userId: string) {
    await this.usersService.enableUser(userId);
    return response.status(HttpStatus.OK).json({
      message: 'User has been successfully enabled',
    });
  }

  //method to update savedPosts
  @Roles('BASIC')
  @Put('updateSaved/:savedId')
  public async updateSaved(
    @Res() response: Response,
    @Param('savedId', ParseObjectIdPipe) savedId: string,
    @Body() body: UserUpdateDTO,
  ) {
    const saved = await this.usersService.updateSavedPost(savedId, body);
    return response.status(HttpStatus.OK).json({
      message: 'Post has been successfully updated',
      saved,
    });
  }

  //method to delete folders in saved
  @Put('delete-folder/:savedId')
  public async deleteSavedPost(@Res() response: Response, @Param('savedId', ParseObjectIdPipe) savedId: string) {
    await this.usersService.deleteSavedPostById(savedId);
    return response.status(HttpStatus.OK).json({
      message: 'Folder has been successfully deleted',
    });
  }
}
