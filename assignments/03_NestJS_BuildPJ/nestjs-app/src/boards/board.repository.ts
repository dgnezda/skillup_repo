import { DataSource, Repository } from "typeorm";
import { Board } from "./board.entity"
import { Injectable } from "@nestjs/common";

@Injectable() // Use Repository.extend?
export class BoardRepository extends Repository<Board> {
    constructor(private dataSource: DataSource) {
        super(Board, dataSource.createEntityManager());
    }

    async getById(id: number) {
        return this.findOne({where: { id }});
    }
}