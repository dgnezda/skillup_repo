import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {
    private boards: Board[] = [];

    getAllBoards(): Board[] {
        return this.boards;
    }

    createBoard(createBoardDto: CreateBoardDto): Board {
        const { title, description } = createBoardDto; // destructuring! syntax (same as const title = createBoardDto.title, const desc....)
        
        const board: Board = {
            id: uuid(),         // automatically create a unique id
            title,              // if key and value are the same like so: title: title, then no need to write both, just write title,
            description,        // same here.
            status: BoardStatus.PUBLIC
        }
        this.boards.push(board);
        return board;
    }

    getBoardById(id: string): Board {
        return this.boards.find(board => board.id === id);
    }

    deleteBoard(id: string): void {
        this.boards = this.boards.filter(board => board.id !== id);
    }

    updateBoardStatus(id: string, status: BoardStatus): Board {
        const board = this.getBoardById(id);
        board.status = status;
        return board;
    }
}
