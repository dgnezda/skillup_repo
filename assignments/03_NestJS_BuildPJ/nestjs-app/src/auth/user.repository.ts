import { EntityRepository, Repository } from "typeorm";
import { User } from "./user.entity";

@EntityRepository(User) // TODO: depracated decorator
export class UserRepository extends Repository<User> {

}