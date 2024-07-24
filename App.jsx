import React, { Component } from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import params from './src/params';
import Field from './src/components/Field';
import MineField from './src/components/MineField';
import { createMinedBoard, wonGame, openField, cloneBoard, showMines, hadExplosion, invertFlag } from './src/functions';

export default class App extends Component {

  constructor(props){
    super(props)
    this.state = this.createState()
  }

  minesAmount = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return Math.ceil(cols * rows * params.difficultyLevel)
  }

  createState = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return {
      board: createMinedBoard(rows, cols, this.minesAmount()),
      won: false,
      lost: false,
    }
  }

  onOpenField = (row, column) => {
    const board = cloneBoard(this.state.board)
    openField(board, row, column)
    const lost = hadExplosion(board)
    const won = wonGame(board)

    if (lost) {
      showMines(board)
      Alert.alert("Burro pacario")
    }
    if (won) {
      Alert.alert('n fez mais q sua obrigação')
    }

    this.setState({board, lost, won})
  }

  onSelectField = (row, column) => {
    const board = cloneBoard(this.state.board)
    invertFlag(board, row, column)
    const won = wonGame(board)

    if (won) {
      Alert.alert("parabens")
    }

    this.setState({board, won})
  }

  render(){
    return (
      <View style={styles.sectionContainer}>
        <Text style={styles.Title}>Iniciando o Mines!</Text>
        <Text style={styles.Description}>Tamanho da grade:
          {params.getRowsAmount()}x{params.getColumnsAmount()}
        </Text>
        <View style={styles.board}>
          <MineField board={this.state.board} onOpenField={this.onOpenField} onSelectField={this.onSelectField}/>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  sectionContainer: {
    flex:1,
    justifyContent: 'flex-end',
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA'
  },
  Title: {

  },
  Description: {

  },
});


