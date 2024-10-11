// user-vehicle-info.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Users } from "./users.entity";
import { VehicleType } from "../master/vehicle-type.entity";

@Entity("UserVehicleInfo")
export class UserVehicleInfo {
  @PrimaryGeneratedColumn()
  UserVehicleInfoId: number;

  @ManyToOne(() => VehicleType, (vehicleType) => vehicleType.vehicles)
  @JoinColumn({ name: "VehicleTypeId" })
  VehicleType: VehicleType;

  @ManyToOne(() => Users, (user) => user.vehicles)
  @JoinColumn({ name: "UserId" })
  User: Users;

  @Column()
  LicenseNo: string;

  @Column()
  VehicleModel: string;

  @Column()
  VehiclePhoto: string;

  @Column()
  Details: string;
}
