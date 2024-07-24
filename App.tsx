import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import params from './src/params';
import Field from './src/components/Field';
import MineField from './src/components/MineField';
import { createMinedBoard } from './src/functions';

export default class App extends Component {

  constructor(props: {}){
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
    }
  }

  render(){
    return (
      <View style={styles.sectionContainer}>
        <Text style={styles.Title}>Iniciando o Mines!</Text>
        <Text style={styles.Description}>Tamanho da grade:
          {params.getRowsAmount()}x{params.getColumnsAmount()}
        </Text>
        <View style={styles.board}>
          <MineField board={this.state.board}/>
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


