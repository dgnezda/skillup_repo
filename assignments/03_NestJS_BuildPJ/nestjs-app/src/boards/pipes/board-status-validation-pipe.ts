import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { BoardStatus } from "../board.model";

export class BoardStatusValidationPipe implements PipeTransform {

    readonly StatusOptions = [
        BoardStatus.PUBLIC,
        BoardStatus.PRIVATE
    ]

    transform(value: any, metadata: ArgumentMetadata) {
         value = value.toUpperCase();

         if (!this.isStatusValid(value)) {
            throw new BadRequestException(`${value} is not in the status options, brozef`)
         }
         return value;
    }

    private isStatusValid(status: any) {
        const index = this.StatusOptions.indexOf(status); // returns -1 if index not found
        return index !== -1;
    }
}