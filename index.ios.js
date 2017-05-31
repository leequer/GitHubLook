/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import HomePage from './js/pages/HomePage.js';



export default class GithubLook extends Component {
  render() {
    return (
      <View style={styles.container}>
      <HomePage/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  }

});

AppRegistry.registerComponent('GithubLook', () => GithubLook);
