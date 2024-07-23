import React, { Component } from 'react';
import type {PropsWithChildren} from 'react';
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View,} from 'react-native';
import params from './src/params';

export default class App extends Component {
  render(){
    return (
      <View style={styles.sectionContainer}>
        <Text style={styles.Title}>Iniciando o Mines!</Text>
        <Text style={styles.Description}>Tamanho da grade:
          {params.getRowsAmount()}x{params.getColumnsAmount()}
        </Text>
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


