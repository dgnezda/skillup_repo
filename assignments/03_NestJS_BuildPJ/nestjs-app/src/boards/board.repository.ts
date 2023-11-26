import { EntityRepository, Repository } from "typeorm";
import { Board } from "./board.entity"
import { CreateBoardDto } from "./dto/create-board.dto";

@EntityRepository() // TODO: deprecated decorator, use Repository.extend? -> check docs!
export class BoardRepository extends Repository<Board> {
    async createBoard(createBoardDto: CreateBoardDto, user: User) : Promise<Board> {
        const {title, description} = createBoardDto;

        const board = this.create({ 
            title, 
            description,
            status: BoardStatus.PUBLIC,
            user
        })

        await this.save(board);
        return board;
    }
}