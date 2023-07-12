/* eslint-disable prettier/prettier */
import { Controller } from "@nestjs/common";
import { CityService } from "./city.service";
import { Get, Param, Post } from "@nestjs/common/decorators";
import { CityEntity } from "./entities/city.entity";

@Controller('city')
export class CityController{
    constructor(
        private readonly cityService: CityService
    ) {}

    @Get('/:stateId')
    async getAllCitiesByStateId(@Param('stateId') stateId: number): Promise<CityEntity[]> {
        return this.cityService.getAllCitiesByStateId(stateId);
    }
}