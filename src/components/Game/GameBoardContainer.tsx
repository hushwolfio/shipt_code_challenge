/**
 * Austin Welborn 2020
 * Shipt Code Challenge
 * Tic-Tac-Toe Game
 */

import React, { useEffect } from 'react';
import { Alert } from 'react-native';
import { winningCombinations, grid } from './gameConstants';
import { buildGameRows } from './helperFunctions';
import GameBoard from './GameBoard';

type Props = {
  /** current player piece, either X or O */
  playerPiece: string;
  /** callback to switch the piece between X or O */
  switchPiece: () => void;
  /** list of the moves, 9 in total possible */
  moveList: string[];
  /** callback to update the move list */
  setMoveList: (moves: string[]) => void;
  /** number of moves made */
  moveCount: number;
  /** callback to update number of moves */
  setMoveCount: (count: number) => void;
  /** callback to reset the game, including board and move list */
  resetGame: () => void;
  /** callback to reset the game and go back to main menu */
  leaveAndReset: () => void;
};

/**
 * Displays:
 * GameBoard
 * Player Pieces
 */
const GameBoardContainer = ({
  moveList,
  moveCount,
  resetGame,
  leaveAndReset,
  playerPiece,
  setMoveList,
  switchPiece,
  setMoveCount,
}: Props) => {
  // checks if winner has been made after each move
  useEffect(() => {
    isThereAWinner(moveList);
  }, [moveCount]);

  // callback to check whether the move ended up in a winning move
  const isThereAWinner = (moveList: string[]) => {
    let winner = '';
    winningCombinations.forEach((array: number[]) => {
      const [pieceA, pieceB, pieceC] = array;

      // if the movelist has X or O pieces that match the index of the winning combinations, set the winning piece
      if (
        moveList[pieceA] &&
        moveList[pieceA] === moveList[pieceB] &&
        moveList[pieceA] === moveList[pieceC]
      ) {
        winner = moveList[pieceA];
      }
    });

    // a winner has been found!
    if (winner !== '' && moveCount > 0) {
      Alert.alert(`Player ${winner} has won!`, 'Try again?', [
        { text: 'Cancel', onPress: leaveAndReset },
        {
          text: 'Okay',
          onPress: resetGame,
        },
      ]);
    }
    // last move is made but no winner
    if (moveCount === 9 && winner === '') {
      Alert.alert('Game is tied!', 'Try again?', [
        {
          text: 'Cancel',
          onPress: leaveAndReset,
        },
        {
          text: 'Okay',
          onPress: resetGame,
        },
      ]);
    }
  };

  const onTurn = (rowIndex: number, colIndex: number) => {
    if (moveCount < 9) {
      let updatedMoves = moveList;
      // finds the index of the movelist that matches the row/column index of the new piece
      let gridId = grid[rowIndex][colIndex];

      // if piece doesn't exist in move list, add it
      if (!updatedMoves[gridId]) {
        updatedMoves[gridId] = playerPiece;

        // updates the move list with new piece
        setMoveList(updatedMoves);

        // switch player/piece
        switchPiece();

        // adds up to move count
        setMoveCount(moveCount + 1);
      }
    }
  };

  return (
    <GameBoard
      buildGameRows={buildGameRows}
      moveList={moveList}
      onTurn={onTurn}
    />
  );
};

export default GameBoardContainer;
