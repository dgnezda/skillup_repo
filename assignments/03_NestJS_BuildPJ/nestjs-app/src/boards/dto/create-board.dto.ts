import { IsNotEmpty } from "class-validator";

export class CreateBoardDto {
    @IsNotEmpty() // Also need to use the @UsePipes(ValidationPipe) in controller for @Post!
    title: string;

    @IsNotEmpty()
    description: string;
}