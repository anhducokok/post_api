import { Exclude } from 'class-transformer';
import {
    IsEmail,
    IsNotEmpty
} from 'class-validator'
export class CreateUserDto {
    @IsEmail()
    email: string;
    @IsNotEmpty()
    // @Exclude()
    password: string;
}