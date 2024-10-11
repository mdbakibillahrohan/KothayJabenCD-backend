// district.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { UserAddress } from "../user/user-address.entity";

@Entity("District")
export class District {
  @PrimaryGeneratedColumn()
  DistrictId: number;

  @Column()
  DistrictName: string;

  @OneToMany(() => UserAddress, (userAddress) => userAddress.District)
  addresses: UserAddress[];
}
