import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { GoogleStrategy } from './auth/strategies/google.strategy';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), AuthModule],
  controllers: [],
  providers: [GoogleStrategy],
})
export class AppModule {}
