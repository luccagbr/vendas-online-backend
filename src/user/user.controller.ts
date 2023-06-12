/* eslint-disable prettier/prettier */
import { Controller } from "@nestjs/common";
import { Get, Post, Body } from "@nestjs/common/decorators";
import { CreateUserDto } from "./dtos/createUser.dto";

@Controller('user')
export class UserController {
    @Post()
    async createUser(@Body() createUser: CreateUserDto) {
        return createUser;
    }
}