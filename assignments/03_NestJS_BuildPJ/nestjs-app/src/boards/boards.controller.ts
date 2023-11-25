import { Controller, Get, Post, Body } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './board.model';
import { CreateBoardDto } from './dto/create-board.dto';

@Controller('boards')
export class BoardsController {
    constructor(private boardsService: BoardsService) {} // private keyword turns parameter 'boardsService' into a class property so it can be accessed elsewhere

    @Get()
    getAllBoards(): Board[] {
        return this.boardsService.getAllBoards();
    }

    @Post()
    createBoard(@Body() createBoardDto: CreateBoardDto) :Board {
        return this.boardsService.createBoard(createBoardDto);
    }
}
