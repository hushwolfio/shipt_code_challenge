/**
 * Austin Welborn 2020
 * Shipt Code Challenge
 * Tic-Tac-Toe Game
 */

import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import gameStyles from '../gameStyleSheet';
import MainMenuContainer from '../Menu/MainMenuContainer';
import GameBoardContainer from '../Game/GameBoardContainer';

type Props = {
  /** boolean for whether game is up */
  isGameUp: boolean;
  /** callback to start/end game */
  isPlayingGame: (gameState: boolean) => void;
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
 * Game Container
 * Main Menu
 */
const AppView = ({
  isGameUp,
  isPlayingGame,
  leaveAndReset,
  playerPiece,
  switchPiece,
  moveList,
  setMoveList,
  moveCount,
  setMoveCount,
  resetGame,
}: Props) => (
  <View style={gameStyles.container}>
    <View style={gameStyles.titleContainer}>
      <Text style={gameStyles.title}>Tic-Tac-Toe</Text>
      {isGameUp ? (
        <TouchableHighlight onPress={() => leaveAndReset()}>
          <Text style={gameStyles.closeText}>X</Text>
        </TouchableHighlight>
      ) : null}
    </View>
    {isGameUp ? (
      <GameBoardContainer
        playerPiece={playerPiece}
        switchPiece={switchPiece}
        moveList={moveList}
        setMoveList={setMoveList}
        moveCount={moveCount}
        setMoveCount={setMoveCount}
        resetGame={resetGame}
        leaveAndReset={leaveAndReset}
      />
    ) : (
      <MainMenuContainer isPlayingGame={isPlayingGame} />
    )}
  </View>
);

export default AppView;
