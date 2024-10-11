// address-type.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { UserAddress } from "./user-address.entity";

@Entity("AddressType")
export class AddressType {
  @PrimaryGeneratedColumn()
  AddressTypeId: number;

  @Column()
  AddressTypeName: string;

  @CreateDateColumn()
  CreatedAt: Date;

  @Column()
  CreatedBy: number;

  @UpdateDateColumn()
  UpdatedAt: Date;

  @Column()
  UpdatedBy: number;

  @OneToMany(() => UserAddress, (userAddress) => userAddress.AddressType)
  addresses: UserAddress[];
}
