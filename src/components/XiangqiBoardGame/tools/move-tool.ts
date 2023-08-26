import { TMove, TPiece } from "../types";

export function get_move(pieces: TPiece[], move: string, turnOf: string): TMove {
    const piece_name = move[0];
    const piece_current_col = move[1];
    const piece_direction = move[2];
    const piece_target = move[3];;

    const pieces_filter = pieces.filter(piece => piece.name === piece_name && piece.color === turnOf);

    const piece = pieces_filter.find(piece => 
        (piece.color === "b" && piece.col === parseInt(piece_current_col) - 1) ||
        (piece.color === "w" && piece.col === 9 - parseInt(piece_current_col)));
    
    if (!piece) {
        throw new Error("Piece not found, move: " + move);
    }

    const newMove: TMove = {
        from: {
            row: piece.row,
            col: piece.col
        },
        to: {
            row: piece.row,
            col: piece.col
        }
    }

    switch (piece_direction) {
        case "+": {
            if (piece.color === "b") {
                newMove.to.row += parseInt(piece_target)
            }
            else {
                newMove.to.row -= parseInt(piece_target)
            }
            break;
        }
        case "-": {
            if (piece.color === "b") {
                newMove.to.row -= parseInt(piece_target)
            }
            else {
                newMove.to.row += parseInt(piece_target)
            }
            break;
        }
        case "=": {
            if (piece.color === "b") {
                newMove.to.col = parseInt(piece_target) - 1
            }
            else {
                newMove.to.col = 9 - parseInt(piece_target)
            }
            break;
        }
    }

    return newMove;
}

export function get_all_moves(pieces: TPiece[], moves: string[], turnOf: string): TMove[] {
    let cloneOfPieces: TPiece[] = JSON.parse(JSON.stringify(pieces))
    const all_moves: TMove[] = [];
    for (const move of moves) {
        const newMove = get_move(cloneOfPieces, move, turnOf);
        all_moves.push(newMove);
        cloneOfPieces = make_move(cloneOfPieces, newMove);
        turnOf = turnOf === "b" ? "w" : "b";
    }
    return all_moves;
}

export function make_move(pieces: TPiece[], move: TMove): TPiece[] {
    const cloneOfPieces: TPiece[] = JSON.parse(JSON.stringify(pieces))
    const piece = cloneOfPieces.find(piece => piece.row === move.from.row && piece.col === move.from.col);
    if (!piece) {
        throw new Error("Piece not found, move: " + move);
    }
    piece.row = move.to.row;
    piece.col = move.to.col;
    return cloneOfPieces;   
}

export function undo_move(pieces: TPiece[], move: TMove): TPiece[] {
    const cloneOfPieces: TPiece[] = JSON.parse(JSON.stringify(pieces))
    const piece = cloneOfPieces.find(piece => piece.row === move.to.row && piece.col === move.to.col);
    if (!piece) {
        throw new Error("Piece not found, move: " + move);
    }
    piece.row = move.from.row;
    piece.col = move.from.col;
    return cloneOfPieces;   
}