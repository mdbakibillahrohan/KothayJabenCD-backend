// user-seller-info.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Users } from "./users.entity";

@Entity("UserSellerInfo")
export class UserSellerInfo {
  @PrimaryGeneratedColumn()
  UserSellerInfoId: number;

  @ManyToOne(() => Users, (user) => user.sellers)
  @JoinColumn({ name: "UserId" })
  User: Users;

  @Column()
  ShopName: string;

  @Column()
  ShopAddress: string;

  @Column()
  ShopLogo: string;

  @Column()
  ShopPhoto: string;
}
