import { Test, TestingModule } from '@nestjs/testing';
import { GoogleOAuthGuard } from './google-oauth-guard';

describe('GoogleOauthGuard', () => {
  let provider: GoogleOAuthGuard;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GoogleOAuthGuard],
    }).compile();

    provider = module.get<GoogleOAuthGuard>(GoogleOAuthGuard);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
