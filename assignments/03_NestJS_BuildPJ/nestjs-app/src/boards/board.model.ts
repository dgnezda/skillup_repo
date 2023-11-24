
export interface Board {
    id: string;
    title: string;
    description: string;
    status: BoardStatus;
}

export enum BoardStatus {   // this is for the status type in the Board interface!
    PUBLIC = 'PUBLIC',      // the status can only be PUBLIC or PRIVATE ..
    PRIVATE = 'PRIVATE'
}   