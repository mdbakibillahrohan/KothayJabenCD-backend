// vehicle-type.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { UserVehicleInfo } from "../user/user-vehicle-info.entity";

@Entity("VehicleType")
export class VehicleType {
  @PrimaryGeneratedColumn()
  TransportTypeId: number;

  @Column()
  TransportTypeName: string;

  @CreateDateColumn()
  CreatedAt: Date;

  @Column()
  CreatedBy: number;

  @UpdateDateColumn()
  UpdatedAt: Date;

  @Column()
  UpdatedBy: number;

  @OneToMany(
    () => UserVehicleInfo,
    (userVehicleInfo) => userVehicleInfo.VehicleType
  )
  vehicles: UserVehicleInfo[];
}
