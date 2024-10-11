// country.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { UserAddress } from "../user/user-address.entity";

@Entity("Country")
export class Country {
  @PrimaryGeneratedColumn()
  CountryId: number;

  @Column()
  CountryName: string;

  @OneToMany(() => UserAddress, (userAddress) => userAddress.Country)
  addresses: UserAddress[];
}
