import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth/auth.controller';
import { AuthService } from './services/auth/auth.service';
import { UserService } from '../user/services/user/user.service';
import { UserModule } from '../user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constant';
import { CustomEmailValidation } from './custom-validator/custom-email-validation';
import { CustomUserNameValidation } from './custom-validator/custom-username-validation';

@Module({
  imports:[UserModule, JwtModule.register({
    global: true,
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '60m' },
  })],
  controllers: [AuthController],
  providers: [AuthService, CustomEmailValidation, CustomUserNameValidation],
  exports: [AuthService]
})
export class AuthModule {}
