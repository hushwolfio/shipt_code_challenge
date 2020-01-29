/**
 * Austin Welborn 2020
 * Shipt Code Challenge
 * Tic-Tac-Toe Game
 */

import { StyleSheet } from 'react-native';

const gameStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  titleContainer: {
    flex: 0.6,
    marginTop: 18,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    color: '#32cd32',
  },
  closeText: {
    marginLeft: 50,
    fontSize: 30,
    color: 'grey',
  },
  menu: {
    height: 50,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  menuText: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    color: 'red',
  },
  gameContainer: {
    flex: 9,
    borderWidth: 1,
    color: 'red',
  },
  gridTable: {
    flex: 7,
    flexDirection: 'column',
    color: 'red',
  },
  gameRow: {
    flex: 1,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  block: {
    flex: 1,
    borderRightWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  blockText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'red',
  },
});

export default gameStyles;
