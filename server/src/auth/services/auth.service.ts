import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/services/users.service';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService, private jwtService: JwtService) {}

  public async signIn(email: string) {
    const user = await this.userService.getUserByEmail(email);

    if (!user) throw new UnauthorizedException('Invalid credentials');

    const payload = { sub: user.userId, role: user.role };

    return { access_token: await this.jwtService.signAsync(payload), user };
  }
}
