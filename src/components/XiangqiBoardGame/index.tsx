import { Grid } from "@mui/material";
import { PGN_string_to_dictionary } from "./tools/PGN-tool";
import { FEN_to_pieces } from "./tools/FEN-tool";
import { get_all_moves } from "./tools/move-tool"; 
import XiangqiBoard from "./XiangqiBoard";

type TProps = {
    PGN_string: string;
}

export default function XiangqiBoardGame(props: TProps) {
    const { PGN_string } = props;
    const pgnData = PGN_string_to_dictionary(PGN_string);
    const FEN = pgnData["FEN"] as string;
    const { pieces, firstMove } = FEN_to_pieces(FEN);
    const movesData = pgnData["moves"] as string[];
    const allMoves = get_all_moves(pieces, movesData, firstMove);

    return (
        <Grid container justifyContent='center' sx={{
            padding: 4
        }}>
            <XiangqiBoard movesData={movesData} allMoves={allMoves} pieces={pieces} firstMove={firstMove}/>
        </Grid>
    );
};