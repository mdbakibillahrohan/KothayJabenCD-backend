import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/modules/user/services/user/user.service';

@Injectable()
export class AuthService {
    constructor(private userService:UserService, private jwtService:JwtService){}

    async signIn(userName:string, pass:string){
        const user = await this.userService.findOne(userName);
        if(user){
            if(user.Password!==pass){
                throw new UnauthorizedException();
            }
            const payload = { sub: user.UserId, username: user.UserName };
            return {
                access_token: await this.jwtService.signAsync(payload)
            };
        }
        throw new UnauthorizedException();
        
    }

    async signUp(){
        
    }
}
