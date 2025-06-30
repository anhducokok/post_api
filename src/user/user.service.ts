
import { Body, Get, Injectable, NotFoundException, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dtos/createUser.dto';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User) private usersRepository: Repository<User>,
    ) { }

    findAll(): Promise<User[]> {
        return this.usersRepository.find();
    }

    findOne(id: number) {
        return this.usersRepository.findOneBy({ id });
    }
    async updateById(id: number, requestBody: CreateUserDto) {
        let user = await this.findOne(id);
        if (!user) {
            throw new NotFoundException('Not found User!');
        }

        const updateUser = { ...user, ...requestBody };

        return this.usersRepository.save(updateUser);
    }
    async remove(id: number) {
        const user = await this.findOne(id);
        if (!user) {
            throw new NotFoundException('Not found User!');
        }

        return this.usersRepository.delete(user);
    }
    createAcc(requestBody: any) {
        const { email, password } = requestBody;

        const user = this.usersRepository.create(requestBody);

        this.usersRepository.save(user);
    }

}
