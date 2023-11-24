import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { v1 as uuid } from 'uuid';

@Injectable()
export class BoardsService {
    private boards: Board[] = [];

    getAllBoards(): Board[] {
        return this.boards;
    }

    createBoard(title: string, description: string) {
        const board: Board = {
            id: uuid(),         // automatically create a unique id
            title,              // if key and value are the same like so: title: title, then no need to write both, just write title,
            description,        // same here.
            status: BoardStatus.PUBLIC
        }
        this.boards.push(board);
        return board;
    }
}
