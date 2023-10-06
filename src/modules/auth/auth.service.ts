import { Injectable } from '@nestjs/common';
import { GoogleAuthResponseDto } from './dtos/response';
import { GoogleAuthEntity } from './entities';

@Injectable()
export class AuthService {
  async googleLogin(googleAuth: GoogleAuthEntity): Promise<GoogleAuthResponseDto> {

    return googleAuth as GoogleAuthResponseDto
  }
}
