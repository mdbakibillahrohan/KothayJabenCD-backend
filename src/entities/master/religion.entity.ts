// religion.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { UserPersonalInfo } from "../user/user-personal-info.entity";

@Entity("Religion")
export class Religion {
  @PrimaryGeneratedColumn()
  ReligionId: number;

  @Column()
  ReligionName: string;

  @OneToMany(
    () => UserPersonalInfo,
    (userPersonalInfo) => userPersonalInfo.Religion
  )
  personalInfos: UserPersonalInfo[];
}
