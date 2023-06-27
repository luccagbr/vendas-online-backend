/* eslint-disable prettier/prettier */
import { hash } from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserEntity } from './interface/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>
        ) {}
    async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
        const saltDrRounds = 10;

        const passwordHash = await hash(createUserDto.password, saltDrRounds)

        return this.userRepository.save({
            ...createUserDto,
            typeUser: 1,
            password: passwordHash
        });
    }

    async getAllUsers(): Promise<UserEntity[]> {
        return this.userRepository.find();
    }
}
