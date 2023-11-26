import { EntityRepository, Repository } from "typeorm";
import { User } from "./user.entity";
import { AuthCredentialsDto } from "./dto/auth.credential.dto";
import { ConflictException, InternalServerErrorException } from "@nestjs/common";

@EntityRepository(User) // TODO: depracated decorator
export class UserRepository extends Repository<User> {
    
    async createUser(authCredentialsDto: AuthCredentialsDto): Promise<void> {
        const { username, password } = authCredentialsDto;
        const user = this.create({ username, password });
        try {
            await this.save(user);
        } catch (error) {
            console.log('error', error) // to log error number (check it)
            // throw new Exception
            if (error.code === "23505") {
                throw new ConflictException(`Sorry, username "${username}" is already taken.`);
            } else {
                throw new InternalServerErrorException();
            }
        }
    }
}