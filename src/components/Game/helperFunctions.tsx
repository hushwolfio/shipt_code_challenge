/**
 * Austin Welborn 2020
 * Shipt Code Challenge
 * Tic-Tac-Toe Game
 */

import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import { gameRows, grid } from './gameConstants';
import gameStyles from '../gameStyleSheet';

// callback to build each row of the game
export const buildGameRows = (
  moveList: string[],
  onTurn: (rowIndex: number, colIndex: number) => void
) => {
  return gameRows.map((row: Array<string>, rowIndex: number) => (
    <View style={gameStyles.gameRow} key={rowIndex}>
      {row.map((_, colIndex) => {
        // the array block isn't needed below, only index
        let gridId = grid[rowIndex][colIndex];
        return (
          <TouchableHighlight
            style={gameStyles.block}
            key={colIndex}
            onPress={() => onTurn(rowIndex, colIndex)}
            underlayColor={'#CCC'}
          >
            <Text style={gameStyles.blockText}> {moveList[gridId]} </Text>
          </TouchableHighlight>
        );
      })}
    </View>
  ));
};
