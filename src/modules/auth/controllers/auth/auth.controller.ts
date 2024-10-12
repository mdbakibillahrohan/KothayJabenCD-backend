import { Body, Controller, HttpCode, HttpStatus, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from '../../services/auth/auth.service';
import { SignInRequest } from '../../../../dtos/user/sign-in.request';
import { SignUpDto, } from '../../../../dtos/user/sign-up.request';

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
    @UsePipes(new ValidationPipe({ transform: true }))
    signUp(@Body() signupDto: SignUpDto){
        return this.authService.signUp(signupDto);
    }
}
