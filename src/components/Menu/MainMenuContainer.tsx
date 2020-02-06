/**
 * Austin Welborn 2020
 * Shipt Code Challenge
 * Tic-Tac-Toe Game
 */

import React from 'react';
import MainMenu from './MainMenu';

type Props = {
  /** callback to determine if playing game */
  isPlayingGame: (gameState: boolean) => void;
};

/**
 * Displays
 * Main Menu Container
 */
const MainMenuContainer = ({ isPlayingGame }: Props) => {
  // starts the game by setting to true
  const startGame = () => {
    isPlayingGame(true);
  };

  return <MainMenu startGame={startGame} />;
};

export default MainMenuContainer;
