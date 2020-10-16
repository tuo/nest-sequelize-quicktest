/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
  Request,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Public } from 'src/common/decorators';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly jwtService: JwtService,
  ) {}

  @Post('login')
  @Public()
  async login(@Request() req, @Body() body) {
    console.log('body', body);
    console.log('req.user', req.user);
    const user = await this.authService.validateUser(body.username, body.pass);
    if (!user) {
      throw new HttpException(
        'user not exist or doesnt match',
        HttpStatus.BAD_REQUEST,
      );
    }
    //TODO: sign this with jwt
    const { id } = user;
    const token = this.jwtService.sign({ id }, { expiresIn: '1 days' });
    return {
      token,
      user,
    };
  }
}
