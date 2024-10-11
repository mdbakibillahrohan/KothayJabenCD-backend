import { Body, Controller, HttpCode, HttpStatus, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from '../../services/auth/auth.service';
import { SignInRequest } from '../../requests/sign-in.request';
import { ApiProperty } from '@nestjs/swagger';
import { SignUpRequest } from '../../requests/sign-up.request';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) { }

    @HttpCode(HttpStatus.OK)
    @Post('login')
    @UsePipes(new ValidationPipe({ transform: true }))
    signIn(@Body() signInDto: SignInRequest) {
        return this.authService.signIn(signInDto.username, signInDto.password);
    }

    @Post("signup")
    signUp(@Body() signupDto: SignUpRequest){
        return "this is sign up routes";
    }
}
