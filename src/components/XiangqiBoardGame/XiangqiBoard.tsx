import { Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import BOARD from "./BOARD.svg";
import {TMove, TPiece} from "./types";
import { Fragment, useState } from "react";
import { make_move, undo_move } from "./tools/move-tool"; 
import SyncIcon from '@mui/icons-material/Sync';

type TProps = {
    movesData: string[];
    allMoves: TMove[];
    pieces: TPiece[];
    firstMove: string;
}

export default function XiangqiBoard(props: TProps) {
    const { movesData, allMoves, pieces, firstMove } = props;
    const [isRotate, setIsRotate] = useState<boolean>(false);
    const [piecesState, setPiecesState] = useState<TPiece[]>(pieces);
    const [currMoveIndex, setCurrMoveIndex] = useState<number>(0);
    const [turnOf, setTurnOf] = useState<string>(firstMove);

    function handleRotate() {
        setIsRotate(!isRotate);
    }

    function handleToFirstMove() {
        let piecesClone = JSON.parse(JSON.stringify(piecesState))
        let turn = JSON.parse(JSON.stringify(turnOf))
        for (let i = currMoveIndex; i > 0; i--) {
            piecesClone = undo_move(piecesClone, allMoves[i-1])
            turn === 'b' ? 'w' : 'b'
        }
        setCurrMoveIndex(0)
        setPiecesState(piecesClone)
        setTurnOf(turn)
    }

    function handleToPreviousMove() {
        if (currMoveIndex > 0) {
            const previousPiecesState = undo_move(piecesState, allMoves[currMoveIndex-1])
            setCurrMoveIndex(currMoveIndex - 1)
            setPiecesState(previousPiecesState)
            setTurnOf(turnOf === 'b' ? 'w' : 'b')
        }
    }

    function handleToNextMove() {
        if (currMoveIndex < movesData.length) {
            const nextPiecesState = make_move(piecesState, allMoves[currMoveIndex])
            setCurrMoveIndex(currMoveIndex + 1)
            setPiecesState(nextPiecesState)
            setTurnOf(turnOf === 'b' ? 'w' : 'b')
        }
    }

    function handleToLastMove() {
        let piecesClone = JSON.parse(JSON.stringify(piecesState))
        let turn = JSON.parse(JSON.stringify(turnOf))
        for (let i = currMoveIndex; i < movesData.length; i++) {
            piecesClone = make_move(piecesClone, allMoves[i])
            turn === 'b' ? 'w' : 'b'
        }
        setCurrMoveIndex(movesData.length)
        setPiecesState(piecesClone)
        setTurnOf(turn)
    }

    function handleToIndexMove(index: number) {
        let piecesClone = JSON.parse(JSON.stringify(piecesState))
        let turn = JSON.parse(JSON.stringify(turnOf))
        if (index < currMoveIndex) {
            for (let i = currMoveIndex; i > index; i--) {
                piecesClone = undo_move(piecesClone, allMoves[i-1])
                turn === 'b' ? 'w' : 'b'
            }
        }
        else {
            for (let i = currMoveIndex; i < index; i++) {
                piecesClone = make_move(piecesClone, allMoves[i])
                turn === 'b' ? 'w' : 'b'
            }
        }
        setCurrMoveIndex(index)
        setPiecesState(piecesClone)
        setTurnOf(turn)
    }

    return (
        <Fragment>
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
                    piecesState.map((piece, index) => {
                        return (
                            <Image 
                                key={piece.name + index}
                                src={piece.image} 
                                alt="Bàn cờ tướng" 
                                style={{
                                    width: 40, 
                                    height: 'auto', 
                                    position: 'absolute',
                                    top: (isRotate ? 9 - piece.row : piece.row) * 40,
                                    left: (isRotate ? 8 - piece.col : piece.col) * 40,
                                    zIndex: 100,
                                    boxShadow: '3px 5px 10px 0 rgba(0, 0, 0, .7)',
                                    borderRadius: '50%',
                                    transition: 'left .5s linear, top .5s linear',
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
                        onClick={handleRotate}
                        sx={{
                            color: '#000',
                            bgcolor: "#ccc",
                            fontSize: "1.4rem",
                            fontWeight: 'bold',
                        }}
                    >
                        <SyncIcon sx={{
                            transform: isRotate ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform .5s linear',    
                        }}/>
                    </Button>
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
                <Grid sx={{height: "50%", width: "100%", overflowY: 'auto', pb: 2, }}>
                    <Typography variant="h4" sx={{textAlign: "center", bgcolor: "#000", color: "#fff"}}>Nước đi</Typography>
                    {
                        movesData.map((move, index) => {
                            if (index % 2) {
                                return (
                                    <Fragment key={`move-${index}`}>
                                        <Button 
                                        onClick={() => handleToIndexMove(index+1)}
                                        sx={{
                                            color: '#000',
                                            fontSize: "1.4rem",
                                            textTransform: 'unset',
                                            bgcolor: index+1 === currMoveIndex ? '#ccc !important' : 'unset',
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
                                        }}>{index/2+1}.</Button>
                                        <Button 
                                        onClick={() => handleToIndexMove(index+1)}
                                        sx={{
                                            color: '#000',
                                            fontSize: "1.4rem",
                                            textTransform: 'unset',
                                            bgcolor: index+1 === currMoveIndex ? '#ccc !important' : 'unset',
                                        }}>{move}</Button>  
                                    </Fragment>
                                )
                            }
                        })
                    }
                </Grid>
                <Grid sx={{height: "30%", width: "100%", overflowY: 'auto', padding: 2}}>
                    <Typography variant="h4" sx={{textAlign: "center", bgcolor: "#000", color: "#fff"}}>Chú thích</Typography>
                    <Typography sx={{fontSize: "1.4rem", py: 2}}>Hay quá</Typography>
                </Grid>
            </Grid>

            {/* End Right Panel */}
        </Fragment>
    );
};