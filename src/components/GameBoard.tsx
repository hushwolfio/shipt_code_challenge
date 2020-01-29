/**
 * Austin Welborn 2020
 * Shipt Code Challenge
 * Tic-Tac-Toe Game
 */

import React, { useEffect } from 'react';
import { Text, View, TouchableHighlight, Alert } from 'react-native';
import { winningCombinations, grid, gameRows } from './gameConstants';
import gameStyles from './gameStyleSheet';

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
const GameBoard = ({
  playerPiece,
  switchPiece,
  moveList,
  setMoveList,
  moveCount,
  setMoveCount,
  resetGame,
  leaveAndReset,
}: Props) => {
  // checks if winner has been made after each move
  useEffect(() => {
    isThereAWinner(moveList);
  }, [moveCount]);

  // callback to build each individual block in the game
  const buildBlocks = (row: Array<string>, rowIndex: number) => {
    return row.map((block, index) => {
      // the array block isn't needed below, only index
      let gridId = grid[rowIndex][index];
      return (
        <TouchableHighlight
          style={gameStyles.block}
          key={index}
          onPress={() => onTurn(rowIndex, index)}
          underlayColor={'#CCC'}
        >
          <Text style={gameStyles.blockText}>{moveList[gridId]}</Text>
        </TouchableHighlight>
      );
    });
  };

  // callback to build each row of the game
  const buildGameRows = () => {
    return gameRows.map((row: Array<string>, index: number) => (
      <View style={gameStyles.gameRow} key={index}>
        {buildBlocks(row, index)}
      </View>
    ));
  };

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

  // callback to update movesList with a piece at the row/column index
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
    <View style={gameStyles.gameContainer}>
      <View style={gameStyles.gridTable}>{buildGameRows()}</View>
    </View>
  );
};

export default GameBoard;
