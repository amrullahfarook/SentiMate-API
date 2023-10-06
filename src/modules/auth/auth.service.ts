import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  googleLogin(req) {
    // todo: throw notFoundException
    if (!req.user) {
      return 'No user from google';
    }

    // todo: create return type for google oauth login
    return {
      message: 'User information from google',
      user: req.user,
    };
  }
}
