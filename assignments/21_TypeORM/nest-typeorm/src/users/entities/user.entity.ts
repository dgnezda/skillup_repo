import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity() // Entity is a representation of the DB table
export class User {
    @PrimaryGeneratedColumn() // means auto incrementing int value
    id: number
    
    @Column()
    name: string

    @Column()
    something: string
}
