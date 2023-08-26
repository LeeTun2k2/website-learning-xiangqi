export type TPiece = {
    name: string;
    color: string;
    image: any;
    row: number;
    col: number;
    isOnBoard: boolean;
}

export type TPosition = {
    row: number;
    col: number;
}

export type TMove = {
    from: TPosition;
    to: TPosition;
}