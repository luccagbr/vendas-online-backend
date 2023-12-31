/* eslint-disable prettier/prettier */
import { Controller, ValidationPipe } from "@nestjs/common";
import { Get, Post, Body, UsePipes } from "@nestjs/common/decorators";
import { CreateUserDto } from "./dtos/createUser.dto";
import { UserService } from "./user.service";
import { UserEntity } from "./interface/user.entity";
import { ReturnUserDto } from "./dtos/returnUser.dto";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @UsePipes(ValidationPipe)
    @Post()
    async createUser(@Body() createUser: CreateUserDto): Promise<UserEntity> {
        return this.userService.createUser(createUser);
    }

    @Get()
    async getAllUser(): Promise<ReturnUserDto[]> {
        return (await this.userService.getAllUsers()).map(
            (userEntity) => new ReturnUserDto(userEntity) 
            );
    }
}