// user-address.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Users } from "./users.entity";
import { AddressType } from "./address-type.entity";
import { Country } from "../master/country.entity";
import { Division } from "../master/division.entity";
import { District } from "../master/district.entity";

@Entity("UserAddress")
export class UserAddress {
  @PrimaryGeneratedColumn()
  UserAddressId: number;

  @ManyToOne(() => AddressType, (addressType) => addressType.addresses)
  @JoinColumn({ name: "AddessTypeId" })
  AddressType: AddressType;

  @ManyToOne(() => Users, (user) => user.addresses)
  @JoinColumn({ name: "UserId" })
  User: Users;

  @Column()
  StreetAddress1: string;

  @Column()
  StreetAddress2: string;

  @Column()
  PostCode: string;

  @ManyToOne(() => Country, (country) => country.addresses)
  @JoinColumn({ name: "CountryId" })
  Country: Country;

  @ManyToOne(() => Division, (division) => division.addresses)
  @JoinColumn({ name: "DivisionId" })
  Division: Division;

  @ManyToOne(() => District, (district) => district.addresses)
  @JoinColumn({ name: "DistrictId" })
  District: District;

  @Column()
  CityName: string;
}
