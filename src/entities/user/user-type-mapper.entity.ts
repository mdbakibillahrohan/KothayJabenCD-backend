// user-type-mapper.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Users } from "./users.entity";
import { UserType } from "./user-type.entity";

@Entity("UserTypeMapper")
export class UserTypeMapper {
  @PrimaryGeneratedColumn()
  UserTypeMapperId: number;

  @ManyToOne(() => Users, (user) => user.userTypes)
  @JoinColumn({ name: "UserId" })
  User: Users;

  @ManyToOne(() => UserType, (userType) => userType.mappers)
  @JoinColumn({ name: "UserTypeId" })
  UserType: UserType;
}
