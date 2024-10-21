import { Module } from '@nestjs/common';
import { OrderModule } from './order/order.module';
import { Order } from './order/entities/order.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'pass@word1',
    database: 'db',
    entities: [Order],
    synchronize: true,
  }),
  OrderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
