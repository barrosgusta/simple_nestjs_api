import { Module } from '@nestjs/common';
import { CarController } from './car/car.controller';
import { CarService } from './car/car.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  controllers: [CarController],
  providers: [CarService, PrismaService],
})
export class AppModule { }
