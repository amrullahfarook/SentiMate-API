import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { GoogleAuthEntity } from './entities';
import { GoogleAuthResponseDto } from './dtos/response';

describe('AuthService', () => {
  let authService: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService],
    }).compile();

    authService = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(authService).toBeDefined();
  });

  describe('googleLogin', () => {

    it('should be defined', () => {
      expect(authService.googleLogin).toBeDefined();
    });

    it('should return a google auth response object', async () => {
      const googleAuth: GoogleAuthEntity = {
        email: 'john@gmail.com',
        firstName: 'john',
        lastName: 'doe',
        picture: 'www.fakeProfileUrl.com'
      }

      const googleAuthResponse: GoogleAuthResponseDto = {...googleAuth}

      const result = await authService.googleLogin(googleAuth)

      expect(result).toEqual(googleAuthResponse);
    });
  })
});
