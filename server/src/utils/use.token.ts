import * as jwt from 'jsonwebtoken';
import { AuthTokenResult, IUseToken } from 'src/auth/interfaces/auth.interface';

/* This is a TypeScript function named `useToken` that takes in a string parameter `token` and returns
either an object of type `IUseToken` or a string. */
export const useToken = (token: string): IUseToken | string => {
  try {
    const decode = jwt.decode(token) as AuthTokenResult;

    // Check if token is expired
    const currentDate = new Date();
    const expiredDate = new Date(decode.exp);

    return {
      sub: decode.sub,
      role: decode.role,
      isExpired: +expiredDate <= +currentDate / 1000,
    };
  } catch (error) {
    return 'Token is invalid';
  }
};
