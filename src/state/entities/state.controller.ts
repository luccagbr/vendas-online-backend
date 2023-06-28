/* eslint-disable prettier/prettier */
import { Controller, Get } from "@nestjs/common/decorators";
import { StateService } from "./state.service";
import { StateEntity } from "./state.entity";

@Controller('state')
export class StateController {
    constructor(
        private readonly stateService: StateService
    ) {}

    @Get()
    async getAllState(): Promise<StateEntity[]> {
        return this.stateService.getAllState();
    }
}