import { Test, TestingModule } from '@nestjs/testing';
import { CarController } from './car.controller';
import { CarService } from './car.service';
import { PrismaService } from '../prisma.service';

describe('CarController', () => {
    let carController: CarController;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [CarController],
            providers: [CarService, PrismaService],
        }).compile();

        carController = app.get<CarController>(CarController);
    });

    describe('Car Brands', () => {
        it('should return an array of car brands', async () => {
            const carBrands = await carController.getCarBrands();
            expect(Array.isArray(carBrands)).toBe(true);
        });
    });

    describe('Car Models', () => {
        it('should return an array of car models for a brand', async () => {
            const carModels = await carController.getCarModels('Toyota');
            expect(Array.isArray(carModels)).toBe(true);
        });

        it('should throw an error if no brand is provided', async () => {
            try {
                await carController.getCarModels('');
            } catch (error) {
                expect(error.message).toBe('Please provide a brand');
            }
        });
    });
});
