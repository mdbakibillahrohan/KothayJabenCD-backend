// gender.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { UserPersonalInfo } from "../user/user-personal-info.entity";

@Entity("Gender")
export class Gender {
  @PrimaryGeneratedColumn()
  GenderId: number;

  @Column()
  GenderName: string;

  @OneToMany(
    () => UserPersonalInfo,
    (userPersonalInfo) => userPersonalInfo.Gender
  )
  personalInfos: UserPersonalInfo[];
}
