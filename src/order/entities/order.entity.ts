import { Column, Entity,  PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Order {
   @PrimaryGeneratedColumn()
   orderid: number;

@Column()
orderName: string;

@Column()
orderPrice: number;
}
