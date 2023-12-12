import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn() // means auto incrementing int value
    id: number
    
    @Column()
    name: string

}
