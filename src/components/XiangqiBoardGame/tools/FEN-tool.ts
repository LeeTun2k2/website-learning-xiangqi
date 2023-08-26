import { TPiece } from "../types";
import {bA,bB,bC,bK,bN,bR,bP,rA,rB,rC,rK,rN,rR,rP,} from "../common/pieces";

export function FEN_to_pieces(FEN: string = "rnbakabnr/9/1c5c1/p1p1p1p1p/9/9/P1P1P1P1P/1C5C1/9/RNBAKABNR w - - 0 1"): {pieces: TPiece[]; firstMove: string;} {
    const pieces: TPiece[] = [];
    const data = FEN.trim().split(" ")
    const rows = data[0].split("/");

    for (let row = 0; row < rows.length; row++) {
        const rowContent = rows[row];
        let col = 0;

        for (let i = 0; i < rowContent.length; i++) {
            const char = rowContent[i];

            if (/\d/.test(char)) {
                col += parseInt(char);
            } 
            else {
                let piece;
                switch (char) {
                    case "a":
                        piece = bA;
                        break;
                    case "A":
                        piece = rA;
                        break;
                    case "b":
                        piece = bB;
                        break;
                    case "B":
                        piece = rB;
                        break;
                    case "c":
                        piece = bC;
                        break;
                    case "C":
                        piece = rC;
                        break;
                    case "k":
                        piece = bK;
                        break;
                    case "K":
                        piece = rK;
                        break;
                    case "n":
                        piece = bN;
                        break;
                    case "N":
                        piece = rN;
                        break;
                    case "r":
                        piece = bR;
                        break;
                    case "R":
                        piece = rR;
                        break;
                    case "p":
                        piece = bP;
                        break;
                    case "P":
                        piece = rP;
                        break;
                    default:
                        break;
                }

                if (piece) {
                    pieces.push({
                        ...piece,
                        row,
                        col,
                    });
                }

                col++;
            }
        }
    }

    const firstMove = data[1];

    return { pieces, firstMove };
}
