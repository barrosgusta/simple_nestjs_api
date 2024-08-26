import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

export type CarModels = {
    [brand: string]: string[];
}

@Injectable()

export class CarService {
    constructor(private prisma: PrismaService) { }

    async getCarModels(brandName: string) {
        return this.prisma.car.findMany({
            where: {
                brand: {
                    name: brandName
                }
            }
        });
    }

    async getCarBrands() {
        return this.prisma.carBrand.findMany();
    }

    async getAllCarModels() {
        return this.prisma.carBrand.findMany();
    }
}
