import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { GoogleStrategy } from './auth/strategies';

@Module({
  imports: [ConfigModule.forRoot(), AuthModule, UsersModule],
  controllers: [],
  providers: [GoogleStrategy],
})
export class AppModule {}
