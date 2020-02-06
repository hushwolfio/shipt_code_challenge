/**
 * Austin Welborn 2020
 * Shipt Code Challenge
 * Tic-Tac-Toe Game
 */

import React from 'react';

import { Text, View, TouchableHighlight } from 'react-native';
import gameStyles from '../gameStyleSheet';

type Props = {
  // callback to start game
  startGame: () => void;
};

/**
 * Displays:
 * Main Menu
 */
const MainMenu = ({ startGame }: Props) => (
  <View style={gameStyles.menu}>
    <TouchableHighlight
      activeOpacity={1}
      underlayColor={'white'}
      onPress={startGame}
    >
      <Text style={gameStyles.menuText}>Start New Game?</Text>
    </TouchableHighlight>
  </View>
);

export default MainMenu;
