// user-driver-info.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Users } from "./users.entity";

@Entity("UserDriverInfo")
export class UserDriverInfo {
  @PrimaryGeneratedColumn()
  UserDriverInfoId: number;

  @ManyToOne(() => Users, (user) => user.drivers)
  @JoinColumn({ name: "UserId" })
  User: Users;

  @Column()
  DrivingLicenseNo: string;

  @Column()
  LicenseFrontPhoto: string;

  @Column()
  LicenseBackPhoto: string;

  @Column()
  AcknowledgementSlip: string;
}
