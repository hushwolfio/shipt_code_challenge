/**
 * Austin Welborn 2020
 * Shipt Code Challenge
 * Tic-Tac-Toe Game
 */

import React from 'react';
import { View } from 'react-native';
import gameStyles from '../gameStyleSheet';

type Props = {
  // callback to build the game board
  buildGameRows: (
    moveList: string[],
    onTurn: (rowIndex: number, colIndex: number) => void
  ) => React.ReactNode;
  // list of all moves for single game
  moveList: string[];
  // callback to update movesList with a piece at the row/column index
  onTurn: (rowIndex: number, colIndex: number) => void;
};

/**
 * Displays:
 * Game board
 */
const GameBoard = ({ buildGameRows, moveList, onTurn }: Props) => (
  <View style={gameStyles.gameContainer}>
    <View style={gameStyles.gridTable}>{buildGameRows(moveList, onTurn)}</View>
  </View>
);

export default GameBoard;
