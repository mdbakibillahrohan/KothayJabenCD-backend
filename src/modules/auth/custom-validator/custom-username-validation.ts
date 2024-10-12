import { Injectable, UnprocessableEntityException } from "@nestjs/common";
import { ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { Users } from "src/entities/user/users.entity";
import { DataSource } from "typeorm";


@Injectable()
@ValidatorConstraint({name:"username", async: true})
export class CustomUserNameValidation implements ValidatorConstraintInterface{
    constructor(private readonly dataSource:DataSource){}
    
    async validate(value: any) {
        const data = await this.dataSource.getRepository(Users).findOne({where: {UserName: value}});
        if(data){
            throw new UnprocessableEntityException("UserName already exists");
        }{
            return true;
        }
    }
}