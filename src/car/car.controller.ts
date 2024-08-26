import { Controller, Get, HttpException, HttpStatus, Query } from "@nestjs/common";
import { CarModels, CarService } from "./car.service";

@Controller("car")
export class CarController {
    constructor(private readonly carService: CarService) { }

    @Get("brands")
    async getCarBrands() {
        return this.carService.getCarBrands();
    }

    @Get("models")
    async getCarModels(@Query("brand") brand: string) {
        if (!brand) {
            throw new HttpException(
                'Please provide a brand',
                HttpStatus.BAD_REQUEST,
            );
        }
        return this.carService.getCarModels(brand);
    }

    @Get("allModels")
    async getAllCarModels() {
        return this.carService.getAllCarModels();
    }
}