/* eslint-disable prettier/prettier */
import { Controller } from "@nestjs/common";
import { Get, Post, Body } from "@nestjs/common/decorators";
import { CreateUserDto } from "./dtos/createUser.dto";
import { UserService } from "./user.service";
import { UserEntity } from "./interface/user.entity";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    async createUser(@Body() createUser: CreateUserDto): Promise<UserEntity> {
        return this.userService.createUser(createUser);
    }

    @Get()
    async getAllUser(): Promise<UserEntity[]> {
        return this.userService.getAllUsers();
    }
}