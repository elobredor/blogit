import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { ADMIN_KEY, PUBLIC_KEY, ROLES_KEY } from 'src/constants/key.decorators';
import { ROLES } from 'src/constants/roles';
import { ErrorManager } from 'src/utils/error.manager';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    try {
      const isPubic = this.reflector.get<boolean>(PUBLIC_KEY, context.getHandler());

      if (isPubic) return true;

      const roles = this.reflector.get<Array<keyof typeof ROLES>>(ROLES_KEY, context.getHandler());

      const admin = this.reflector.get<string>(ADMIN_KEY, context.getHandler());

      const req = context.switchToHttp().getRequest<Request>();

      if (!req) {
        throw new UnauthorizedException('Request object not found');
      }

      if (roles === undefined) {
        if (!admin) return true;
        else if (admin && req['user'] === admin) return true;
        else throw new UnauthorizedException(`don't have permission to access`);
      }

      if (req['user'].role === ROLES.ADMIN) return true;

      const isCreator = roles.some((role) => {
        if (role === ROLES.BASIC && req['user'].role === ROLES.CREATOR) return true;
      });

      if (isCreator) return true;

      const isAuth = roles.some((role) => role === req['user'].role);

      if (!isAuth) throw new UnauthorizedException(`don't have permission to access`);

      return true;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
}
