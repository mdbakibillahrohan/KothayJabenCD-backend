import { SignUpDto, UserAddressDto } from './../../../../dtos/user/sign-up.request';
import { Injectable } from '@nestjs/common';
import { UserAddress } from 'src/entities/user/user-address.entity';
import { Users } from 'src/entities/user/users.entity';
import { DataSource } from 'typeorm';

@Injectable()
export class UserService {

    constructor(private dataSource:DataSource){

    }
    async findOne(userNameOrEmail:string){
        return this.dataSource.getRepository(Users).findOne({where: {UserName:userNameOrEmail}})
    }

    async createUser(userInfo:SignUpDto){
        const user = new Users();
        user.UserName = userInfo.username;
        user.Email = userInfo.email;
        user.MobileNo = userInfo.mobileNo;
        user.Password = userInfo.password;

        const save = await this.dataSource.getRepository(Users).insert(user);
        return save.identifiers[0].UserId;
    }

    async createUserAddress(userAddressInfo:UserAddressDto){
        const userAddress = new UserAddress();
        userAddress.AddressTypeId = userAddressInfo.addressTypeId;
    }

    async createUserType(userId:number, userTypeArray:number[]){

    }
    
}
