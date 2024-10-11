import { Injectable } from '@nestjs/common';
import { Users } from 'src/entities/user/users.entity';
import { DataSource } from 'typeorm';

@Injectable()
export class UserService {

    constructor(private dataSource:DataSource){

    }
    async findOne(userNameOrEmail:string){
        return this.dataSource.getRepository(Users).findOne({where: {UserName:userNameOrEmail}})
    }
    
}
