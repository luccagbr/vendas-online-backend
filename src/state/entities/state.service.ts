/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { StateEntity } from "./state.entity";
import { Repository } from "typeorm";

@Injectable()
export class StateService{
    constructor(
        @InjectRepository(StateEntity) private readonly stateRepository: Repository<StateEntity>
    ) {}

    async getAllState(): Promise<StateEntity[]> {
        return await this.stateRepository.find();
    }
}