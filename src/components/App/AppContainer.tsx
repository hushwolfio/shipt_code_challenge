/**
 * Austin Welborn 2020
 * Shipt Code Challenge
 * Tic-Tac-Toe Game
 */

import React, { useState } from 'react';
import AppView from './AppView';

/**
 * Displays:
 * App View
 */
const AppContainer = () => {
  // sets boolean flag for whether game is being played
  const [isGameUp, setGame] = useState(false);

  // sets the current player piece, which can alternate between X and O
  const [playerPiece, setPlayerPiece] = useState('X');

  // creates an array of all moves being made in a single game
  const [moveList, setMoveList] = useState(new Array(9).fill(''));

  // counts how many moves were made
  const [moveCount, setMoveCount] = useState(0);

  const isPlayingGame = (gameState: boolean) => {
    setGame(gameState);
  };

  // callback to reset the game
  const resetGame = () => {
    setMoveList(new Array(9).fill(''));
    setMoveCount(0);
  };

  // callback for alternating between X and O
  const switchPiece = () =>
    playerPiece === 'X' ? setPlayerPiece('O') : setPlayerPiece('X');

  const leaveAndReset = () => {
    isPlayingGame(false);
    resetGame();
  };

  return (
    <AppView
      playerPiece={playerPiece}
      switchPiece={switchPiece}
      leaveAndReset={leaveAndReset}
      isGameUp={isGameUp}
      moveList={moveList}
      setMoveList={setMoveList}
      setMoveCount={setMoveCount}
      moveCount={moveCount}
      isPlayingGame={isPlayingGame}
      resetGame={resetGame}
    />
  );
};

export default AppContainer;
