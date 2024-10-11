// division.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { UserAddress } from "../user/user-address.entity";

@Entity("Division")
export class Division {
  @PrimaryGeneratedColumn()
  DivisionId: number;

  @Column()
  DivisionName: string;

  @OneToMany(() => UserAddress, (userAddress) => userAddress.Division)
  addresses: UserAddress[];
}
