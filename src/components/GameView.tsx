/**
 * Austin Welborn 2020
 * Shipt Code Challenge
 * Tic-Tac-Toe Game
 */

import React, { useState } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import gameStyles from './gameStyleSheet';
import MainMenu from './MainMenu';
import GameBoard from './GameBoard';

/**
 * Displays:
 * Text for Title
 * MainMenu
 * GameBoard
 */
const GameView = () => {
  // sets boolean flag for whether game is being played
  const [isGamePlaying, setGame] = useState(false);

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
    <View style={gameStyles.container}>
      <View style={gameStyles.titleContainer}>
        <Text style={gameStyles.title}>Tic-Tac-Toe</Text>
        {isGamePlaying ? (
          <TouchableHighlight onPress={() => leaveAndReset()}>
            <Text style={gameStyles.closeText}>X</Text>
          </TouchableHighlight>
        ) : null}
      </View>
      {isGamePlaying ? (
        <GameBoard
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
        <MainMenu isPlayingGame={isPlayingGame} />
      )}
    </View>
  );
};

export default GameView;
