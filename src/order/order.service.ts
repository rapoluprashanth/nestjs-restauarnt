import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { Repository } from 'typeorm';
import { HttpException } from '@nestjs/common';

@Injectable()
export class OrderService {
  // create(createOrderDto: CreateOrderDto) {
  //   return 'This action adds a new order';
  // }
  constructor(

    @InjectRepository(Order)
 
    private readonly userRepository:Repository<Order>
 
  ){}
 
 
  async create(createUserDto: CreateOrderDto):Promise<Order> {
 
    const user = await this.userRepository.create(createUserDto);
 
    return this.userRepository.save(user);
 
  } 
  async findAll():Promise<Order[]> {
    return await this.userRepository.find();
  }

 async  findOne(orderid: number):Promise<Order> {
  const userData =
  await this.userRepository.findOneBy({ orderid });
if (!userData) {
  throw new HttpException(
    'User Not Found',
    404,
  );
}
return userData;
  }

  async update(
    id: number,
    updateUserDto: UpdateOrderDto,
  ): Promise<Order> {
    const existingUser = await this.findOne(id);
    const userData = this.userRepository.merge(
      existingUser,
      updateUserDto,
    );
    return await this.userRepository.save(
      userData,
    );
  }

  async remove(id: number): Promise<Order> {
    const existingUser = await this.findOne(id);
    return await this.userRepository.remove(
      existingUser,
    );
  }
}
