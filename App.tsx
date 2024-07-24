import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import params from './src/params';
import Field from './src/components/Field';

export default class App extends Component {
  render(){
    return (
      <View style={styles.sectionContainer}>
        <Text style={styles.Title}>Iniciando o Mines!</Text>
        <Text style={styles.Description}>Tamanho da grade:
          {params.getRowsAmount()}x{params.getColumnsAmount()}
        </Text>
        <Field/>
        <Field opened/>
        <Field opened nearMines={1} />
        <Field opened nearMines={3} />
        <Field opened nearMines={8} />
        <Field opened nearMines={2} />
        <Field mined />
        <Field mined opened />
        <Field mined opened exploded />
        <Field flagged/>
        <Field flagged opened/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  sectionContainer: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
    paddingHorizontal: 24,
  },
  Title: {
    fontSize: 24,
    fontWeight: '600',
  },
  Description: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});


