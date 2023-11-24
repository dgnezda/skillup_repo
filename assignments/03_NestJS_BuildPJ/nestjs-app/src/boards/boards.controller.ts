import { Controller, Get } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './board.model';

@Controller('boards')
export class BoardsController {
    constructor(private boardsService: BoardsService) {} // private keyword turns parameter 'boardsService' into a class property so it can be accessed elsewhere

    @Get()
    getAllBoards(): Board[] {
        return this.boardsService.getAllBoards();
    }
}
