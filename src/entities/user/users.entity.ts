// users.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
  OneToOne,
} from "typeorm";
import { UserTypeMapper } from "./user-type-mapper.entity";
import { UserAddress } from "./user-address.entity";
import { UserVehicleInfo } from "./user-vehicle-info.entity";
import { UserDriverInfo } from "./user-driver-info.entity";
import { UserSellerInfo } from "./user-seller-info.entity";
import { UserNidInfo } from "./user-nid-info.entity";
import { UserPersonalInfo } from "./user-personal-info.entity";

@Entity("Users")
export class Users {
  @PrimaryGeneratedColumn()
  UserId: number;

  @Column()
  UserName: string;

  @Column()
  Email: string;

  @Column()
  MobileNo: string;

  @Column()
  Password: string;

  @CreateDateColumn()
  CreatedAt: Date;

  @OneToMany(() => UserTypeMapper, (userTypeMapper) => userTypeMapper.User)
  userTypes: UserTypeMapper[];

  @OneToMany(() => UserAddress, (userAddress) => userAddress.User)
  addresses: UserAddress[];

  @OneToMany(() => UserVehicleInfo, (userVehicleInfo) => userVehicleInfo.User)
  vehicles: UserVehicleInfo[];

  @OneToMany(() => UserDriverInfo, (userDriverInfo) => userDriverInfo.User)
  drivers: UserDriverInfo[];

  @OneToMany(() => UserSellerInfo, (userSellerInfo) => userSellerInfo.User)
  sellers: UserSellerInfo[];

  @OneToMany(() => UserNidInfo, (userNidInfo) => userNidInfo.User)
  nids: UserNidInfo[];

  @OneToOne(() => UserPersonalInfo, (userInfo) => userInfo.user)
  userPersonalInfo: UserPersonalInfo;
}
