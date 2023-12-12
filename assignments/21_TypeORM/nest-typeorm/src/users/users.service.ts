import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private usersRepository: Repository<User>) {}

  create(createUserDto: CreateUserDto) {
    const newUser = this.usersRepository.create(createUserDto)
    return this.usersRepository.save(newUser);
  }

  findAll() {
    return this.usersRepository.find(); // SELECT * FROM user.. .find() is for selecting data from database. Check Find Options on https://typeorm.io/find-options
    // return this.usersRepository.createQueryBuilder() --- if you use SQL https://typeorm.io/select-query-builder
  }

  findOne(id: number) {
    return this.usersRepository.findOneBy({ id });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.findOne(id)
    return this.usersRepository.save({...user, ...updateUserDto});
    // return this.userRepository.update(id, updateUserDto) --- this way it doesn't actually return the user - which you want to do in most cases - but just "user updated"
  }

  async remove(id: number) {
    const user = await this.findOne(id)
    return this.usersRepository.remove(user);
    // return this.usersRepository.delete(id) --- same as above, doesn't return deleted user
  }
}
