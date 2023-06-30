/* eslint-disable prettier/prettier */
import { Controller } from "@nestjs/common";
import { CityService } from "./city.service";
import { Get, Post } from "@nestjs/common/decorators";
import { CityEntity } from "./entities/city.entity";

@Controller('city')
export class CityController{
    constructor(
        private readonly cityService: CityService
    ) {}

    @Get('/:state')
    async getAllCitiesByStateId(stateId: number): Promise<CityEntity[]> {
        return this.cityService.getAllCitiesByStateId(5);
    }
}