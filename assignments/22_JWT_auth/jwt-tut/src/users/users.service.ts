import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UserService {
    private users: User[] = [
        {
            id: 0,
            name: 'Bob',
            email: 'bob@mail.com',
            password: 'bobPass'
        },
        {
            id: 1,
            name: 'Bobby',
            email: 'bobby@mail.com',
            password: 'bobbyPass'
        },
        {
            id: 2,
            name: 'Bobbo',
            email: 'bobbo@mail.com',
            password: 'bobboPass'
        },
        {
            id: 3,
            name: 'Boban',
            email: 'boban@mail.com',
            password: 'bobanPass'
        }
    ]

    findByEmail(email: string): Promise<User | undefined> {
        const user = this.users.find((user: User) => user.email === email);
        if (user) {
            return Promise.resolve(user)
        } 
        return undefined;
    }

    findOne(id: number): Promise<User | undefined> {
        const user = this.users.find((user: User) => user.id === id);
        if (user) {
            return Promise.resolve(user)
        } 
        return undefined;
    }
}
