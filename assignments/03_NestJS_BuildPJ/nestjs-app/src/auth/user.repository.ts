import { EntityRepository, Repository } from "typeorm";
import { User } from "./user.entity";
import { AuthCredentialsDto } from "./dto/auth.credential.dto";
import { ConflictException, InternalServerErrorException } from "@nestjs/common";
import * as bcrypt from "bcryptjs";

@EntityRepository(User) // TODO: fix depracated decorator
export class UserRepository extends Repository<User> {
    
    async createUser(authCredentialsDto: AuthCredentialsDto): Promise<void> {
        const { username, password } = authCredentialsDto;

        // Encrypt password using bcryptjs:
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = this.create({ username, password: hashedPassword });
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