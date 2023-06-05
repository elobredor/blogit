import { Body, Controller, Post, UnauthorizedException, UseGuards } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { AuthDTO } from '../dto/auth.dto';
import { AuthGuard } from '../guards/auth.guard';
import { RolesGuard } from '../guards/roles.guard';
import { PublicAccess } from '../decorators/public.decorator';

@Controller('auth')
// @UseGuards(AuthGuard, RolesGuard)
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  //@PublicAccess()
  @Post('login')
  public async login(@Body() { email }: AuthDTO) {
    try {
      return this.authService.signIn(email);
    } catch (error) {
      throw new UnauthorizedException('Error during login');
    }
  }
}
