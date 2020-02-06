/**
 * Austin Welborn 2020
 * Shipt Code Challenge
 * Tic-Tac-Toe Game
 */

// all possible winning combination for move list index
export const winningCombinations = [
  [0, 3, 6],
  [1, 4, 7],
  [0, 1, 2],
  [3, 4, 5],
  [2, 5, 8],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// grid to help build out shape of game
export const grid = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
];

// original gameboard with empty strings
export const gameRows = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
];
