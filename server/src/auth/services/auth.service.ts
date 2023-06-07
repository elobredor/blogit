import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as jwt from 'jsonwebtoken';
import { Model } from 'mongoose';
import { PayloadToken } from '../interfaces/auth.interface';
import { UserInterface } from 'src/interfaces/user.interface';

@Injectable()
export class AuthService {
  constructor(@InjectModel('users') private readonly userModel: Model<UserInterface>) {}
  // validate user
  public async validateUser(email: string) {
    // find user in db
    const userByEmail = await this.userModel.findOne({ email });

    if (userByEmail) return userByEmail;

    return null;
  }

  // sign jwt token
  public signJWT({ payload, secret, expires }: { payload: jwt.JwtPayload; secret: string; expires: number | string }) {
    return jwt.sign(payload, secret, { expiresIn: expires });
  }

  // generate jwt token
  public async generateJWT(user: UserInterface): Promise<any> {
    const getUser = await this.userModel.findOne({ userId: user.userId });
    const payload: PayloadToken = {
      role: getUser.role,
      sub: getUser.userId,
    };

    // sign jwt token
    return {
      accessToken: this.signJWT({
        payload,
        secret: process.env.JWT_SECRET,
        expires: '1h',
      }),
      user,
    };
  }
}
