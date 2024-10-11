// user-type.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
} from "typeorm";
import { UserTypeMapper } from "./user-type-mapper.entity";

@Entity("UserType")
export class UserType {
  @PrimaryGeneratedColumn()
  UserTypeId: number;

  @Column()
  UserTypeName: string;

  @CreateDateColumn()
  CreatedAt: Date;

  @OneToMany(() => UserTypeMapper, (userTypeMapper) => userTypeMapper.UserType)
  mappers: UserTypeMapper[];
}
