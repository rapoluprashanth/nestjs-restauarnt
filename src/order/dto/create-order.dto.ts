import { IsEmpty, IsNotEmpty } from "class-validator";

export class CreateOrderDto {
    @IsNotEmpty()
    @IsEmpty()
    orderid:number;

    @IsNotEmpty()
    @IsEmpty()
    orderName:string;

    @IsNotEmpty()
    @IsEmpty()
    orderPrice:number;

}
