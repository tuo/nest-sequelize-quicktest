import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private reflector: Reflector,
  ) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();
    // return validateRequest(req);

    const isPublic = this.reflector.get<boolean>(
      'isPublic',
      context.getHandler(),
    );
    console.log(
      'auth guard request: ',
      this.jwtService,
      'isPublic, ',
      isPublic,
    );
    if (isPublic) {
      return true;
    }

    if (
      req.headers.authorization &&
      req.headers.authorization.split(' ')[0] === 'Bearer'
    ) {
      const bearTokenValue = req.headers.authorization.split(' ')[1];
      console.log('bearTokenValue: ', bearTokenValue);
      try {
        const verifyResult = this.jwtService.verify(bearTokenValue);
        console.log('verifyResult - user id:  ', verifyResult); //  { id: 1, iat: 1602759511, exp: 1602845911 }
        req.user = verifyResult.id;
      } catch (e) {
        console.log('verify failed', e);
        return false;
      }
      return true;
    } else {
      return false;
    }
  }
}
