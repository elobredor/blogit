import { Body, Controller, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { CreateUserDto, UserUpdateDTO } from '../dto/user.dto';
import { ParseObjectIdPipe } from 'src/utils/parse-object-id-pipe.pipe';
import { PublicAccess } from 'src/auth/decorators/public.decorator';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';

@Controller('users')
@UseGuards(AuthGuard, RolesGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  /* This is a method in a NestJS controller that handles a POST request to create a new user. */
  @PublicAccess()
  @Post('create')
  public async create(@Body() body: CreateUserDto) {
    const newUser = await this.usersService.create(body);
    return newUser;
  }

  /* This is a method in a NestJS controller that handles a GET request to retrieve a user by their UserID.*/
  @UseGuards()
  @PublicAccess()
  @Get(':userId')
  public async getStudent(@Param('userId') userId: string) {
    const user = await this.usersService.findOne(userId);
    return user;
  }

  /* This is a method in a NestJS controller that handles a GET request to retrieve usersProfile.*/
  @UseGuards()
  @PublicAccess()
  @Get('profile/:userId')
  public async getProfile(@Param('userId') userId: string) {
    const usersProfile = await this.usersService.getUserProfile(userId);
    return usersProfile;
  }

  //this is a method in NestJs controller that update a user
  @Roles('BASIC')
  @Put('update/:userId')
  public async updateUser(@Param('userId') userId: string, @Body() body: UserUpdateDTO) {
    await this.usersService.updateUser(userId, body);
    return { message: 'User has been successfully updated' };
  }

  //method to save posts
  @Roles('BASIC')
  @Put('saved/:userId')
  public async savePost(@Param('userId') userId: string, @Body() body: UserUpdateDTO) {
    const savedPost = await this.usersService.savePosts(userId, body);
    return savedPost;
  }

  //method to delete saved posts
  @Roles('BASIC')
  @Put('delete-saved/:userId')
  public async deleteSaved(@Param('userId') userId: string, @Body() body: UserUpdateDTO) {
    const deletedSavedPost = await this.usersService.deleteSavedPost(userId, body);
    return { deletedSavedPost };
  }

  //method to change status of user
  @Roles('BASIC')
  @Put('status/:userId')
  public async changeStatus(@Param('userId') userId: string) {
    await this.usersService.changeStatus(userId);
    return { message: 'Status has been successfully changed' };
  }

  //method to enable user
  @PublicAccess()
  @Put('enable/:userId')
  public async enableUser(@Param('userId') userId: string) {
    await this.usersService.enableUser(userId);
    return { message: 'User has been successfully enabled' };
  }

  //method to update savedPosts
  @Put('updateSaved/:savedId')
  public async updateSaved(@Param('savedId', ParseObjectIdPipe) savedId: string, @Body() body: UserUpdateDTO) {
    const saved = await this.usersService.updateSavedPost(savedId, body);
    return saved;
  }

  //method to delete folders in saved
  @PublicAccess()
  @Put('delete-folder/:savedId')
  public async deleteSavedPost(@Param('savedId', ParseObjectIdPipe) savedId: string) {
    await this.usersService.deleteSavedPostById(savedId);
    return { message: 'Folder has been successfully deleted' };
  }

  //method to get user by email
  @PublicAccess()
  @Get('email/:email')
  public async getUserByEmail(@Param('email') email: string) {
    const user = await this.usersService.getUserByEmail(email);
    return user;
  }
}
