import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AppUtil from "./App-util1";  // local file in same project

export default class App extends React.Component {
  render() {
    return (AppUtil());
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
