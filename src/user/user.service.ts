/* eslint-disable prettier/prettier */
import { hash } from 'bcrypt';
import { CreateUserDto } from './dtos/createUser.dto';
import { User } from './interface/user.interface';

export class UserService {
    private users: User[] = [];

    async createUser(createUserDto: CreateUserDto): Promise<User> {
        const saltDrRounds = 10;

        const passwordHash = await hash(createUserDto.password, saltDrRounds)

        const user: User = {
            ...createUserDto,
            id: this.users.length +1,
            password: passwordHash
        }

        this.users.push(user)

        console.log(passwordHash);

        return user;
    }

    async getAllUsers(): Promise<User[]> {
        return this.users;
    }
}
