// user-personal-info.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToOne,
} from "typeorm";
import { Gender } from "../master/gender.entity";
import { Religion } from "../master/religion.entity";
import { Users } from "./users.entity";

@Entity("UserPersonalInfo")
export class UserPersonalInfo {
  @PrimaryGeneratedColumn()
  UserPersonalInfoId: number;

  @OneToOne(() => Users, (user) => user.userPersonalInfo)
  @JoinColumn({ name: "UserId" })
  user: Users;

  @ManyToOne(() => Gender, (gender) => gender.personalInfos)
  @JoinColumn({ name: "GenderId" })
  Gender: Gender;

  @ManyToOne(() => Religion, (religion) => religion.personalInfos)
  @JoinColumn({ name: "ReligionId" })
  Religion: Religion;

  @Column()
  Name: string;

  @Column()
  DateOfBirth: Date;

  @Column()
  Image: string;
}
