import { IsNotEmpty, IsString } from "class-validator";

/* eslint-disable prettier/prettier */
export class CreateUserDto {
    @IsNotEmpty({ message: "O nome do usuário é obrigatório"})
    @IsString()
    name: string;
    
    @IsNotEmpty({ message: "O e-mail do usuário é obrigatório"})
    @IsString()
    email: string;

    @IsNotEmpty({ message: "O telefone do usuário é obrigatório"})
    @IsString()
    phone: string;

    @IsNotEmpty({ message: "O cpf do usuário é obrigatório"})
    @IsString()
    cpf: string;
    
    @IsNotEmpty({ message: "A senha do usuário é obrigatória"})
    @IsString()
    password: string;
}