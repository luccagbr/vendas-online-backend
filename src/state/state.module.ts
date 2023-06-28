/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { StateEntity } from "./entities/state.entity";
import { StateController } from "./entities/state.controller";
import { StateService } from "./entities/state.service";

@Module({
    imports: [TypeOrmModule.forFeature([StateEntity])],
    controllers: [StateController],
    providers: [StateService]
})
export class StateModule {}