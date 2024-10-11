// user-nid-info.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Users } from "./users.entity";

@Entity("UserNidInfo")
export class UserNidInfo {
  @PrimaryGeneratedColumn()
  UserNidInfoId: number;

  @ManyToOne(() => Users, (user) => user.nids)
  @JoinColumn({ name: "UserId" })
  User: Users;

  @Column()
  NidNo: string;

  @Column()
  NidFrontPhoto: string;

  @Column()
  NidBackPhoto: string;
}
