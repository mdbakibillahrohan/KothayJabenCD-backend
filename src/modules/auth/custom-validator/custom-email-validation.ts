import { Injectable, UnprocessableEntityException } from "@nestjs/common";
import { ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { Users } from "src/entities/user/users.entity";
import { DataSource } from "typeorm";


@Injectable()
@ValidatorConstraint({name:"email", async: true})
export class CustomEmailValidation implements ValidatorConstraintInterface{
    constructor(private readonly dataSource:DataSource){}
    
    async validate(value: any) {
        const data = await this.dataSource.getRepository(Users).findOne({where: {Email: value}});
        if(data){
            throw new UnprocessableEntityException("Email already exists");
        }{
            return true;
        }
    }
}