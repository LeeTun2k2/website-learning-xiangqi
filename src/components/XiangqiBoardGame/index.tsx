import { Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import BOARD from "./BOARD.svg";
import {TPiece} from "./common/pieces";
import { PGN_string_to_dictionary } from "./tools/PGN-tool";
import { FEN_to_pieces } from "./tools/FEN-tool";
import { Fragment, useEffect, useState } from "react";

type TProps = {
    PGN_string: string;
}

export default function XiangqiBoardGame(props: TProps) {
    const { PGN_string } = props;
    const PGN = PGN_string_to_dictionary(PGN_string);
    const FEN = PGN["FEN"]
    const moves = PGN["data"]

    const [pieces, setPieces] = useState<TPiece[]>([]);
    const [turnOf, setTurnOf] = useState<string>('w');

    function handleToFirstMove() {

    }

    function handleToPreviousMove() {
        
    }

    function handleToNextMove() {
        
    }

    function handleToLastMove() {
        
    }

    useEffect(() => {
        if (typeof FEN === 'string') {
            const boardState = FEN_to_pieces(FEN);
            setPieces(boardState.pieces);
            setTurnOf(boardState.turnOf);
            if (Array.isArray(moves)) {
                moves.splice(0, 0, '...');
            }
            if (boardState.turnOf === 'b' && Array.isArray(moves)) {
                moves.splice(0, 0, '...');
            }
        }
    }, [FEN])

    useEffect(() => {
        if (typeof FEN === 'string') {
            const boardState = FEN_to_pieces(FEN);
            setPieces(boardState.pieces);
            setTurnOf(boardState.turnOf);
        }
    }, [FEN])
    
    return (
        <Grid container justifyContent='center' sx={{
            padding: 4
        }}>
            {/* Left Panel */}
            <Grid item sx={{
                position: 'relative',
                userSelect: 'none',
            }}>
                {/* Board */}
                <Image 
                    src={BOARD} 
                    alt="Bàn cờ tướng" 
                    style={{
                        width: 360, 
                        height: 'auto',
                    }}
                />
                {
                    pieces.map((piece, index) => {
                        return (
                            <Image 
                                key={piece.name + index}
                                src={piece.image} 
                                alt="Bàn cờ tướng" 
                                style={{
                                    width: 40, 
                                    height: 'auto', 
                                    position: 'absolute',
                                    top: piece.row * 40,
                                    left: piece.col * 40,
                                    zIndex: 100,
                                    transition: 'left 1s linear, top 1s linear'
                                }}
                            />
                        )
                    })
                }
                {/* End Board */}

                {/* Control */}
                <Grid container justifyContent='space-evenly' padding={2}>
                    <Button
                        onClick={handleToFirstMove}
                        sx={{
                            color: '#000',
                            bgcolor: "#ccc",
                            fontSize: "1.4rem",
                            fontWeight: 'bold',
                        }}
                    >{"<<"}</Button>
                    <Button
                        onClick={handleToPreviousMove}
                        sx={{
                            color: '#000',
                            bgcolor: "#ccc",
                            fontSize: "1.4rem",
                            fontWeight: 'bold',
                        }}
                    >{"<"}</Button>
                    <Button
                        onClick={handleToNextMove}
                        sx={{
                            color: '#000',
                            bgcolor: "#ccc",
                            fontSize: "1.4rem",
                            fontWeight: 'bold',
                        }}
                    >{">"}</Button>
                    <Button
                        onClick={handleToLastMove}
                        sx={{
                            color: '#000',
                            bgcolor: "#ccc",
                            fontSize: "1.4rem",
                            fontWeight: 'bold',
                        }}
                    >{">>"}</Button>
                </Grid>
                {/* End Control */}
            </Grid>
            {/* End Left Panel */}

            {/* Right Panel */}
            <Grid item sx={{
                bgcolor: 'whitesmoke',
                width: 250,
                ml: 2,
            }}>
                <Grid sx={{height: "70%", width: "100%", overflowY: 'auto', padding: 2, }}>
                    <Typography variant="h4" sx={{textAlign: "center", bgcolor: "#000", color: "#fff"}}>Nước đi</Typography>
                    {Array.isArray(moves) && (
                        moves.map((move, index) => {
                            if (index % 2) {
                                return (
                                    <Fragment key={`move-${index}`}>
                                        <Button 
                                        sx={{
                                            color: '#000',
                                            fontSize: "1.4rem",
                                        }}>{move}</Button>
                                    </Fragment>
                                )
                            }
                            else {
                                return (
                                    <Fragment key={`move-${index}`}>
                                        <br/>
                                        <Button 
                                        sx={{
                                            color: '#000',
                                            fontSize: "1.4rem",
                                            minWidth: '0',
                                        }}>{index/2}.</Button>
                                        <Button 
                                        sx={{
                                            color: '#000',
                                            fontSize: "1.4rem",
                                        }}>{move}</Button>  
                                    </Fragment>
                                )
                            }
                        })
                    )}
                </Grid>
                <Grid sx={{height: "30%", width: "100%", overflowY: 'auto', padding: 2}}>
                    <Typography variant="h4" sx={{textAlign: "center", bgcolor: "#000", color: "#fff"}}>Chú thích</Typography>
                    <Typography sx={{fontSize: "1.4rem", py: 2}}>Hay quá</Typography>
                </Grid>
            </Grid>

            {/* End Right Panel */}
        </Grid>
    );
};