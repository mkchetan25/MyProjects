/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions
} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Homescreen from './components/Homescreen';
import Aboutscreen from './components/Aboutscreen';

const { width: viewportWidth } = Dimensions.get('window');

export default class App extends Component {
  render() {
    return (
      <View style={{width: viewportWidth}}>
        <AppContainer style={{width: viewportWidth}}></AppContainer>
      </View>
    )
  }
}

const AppNavigator = createStackNavigator({
  Home: {screen: Homescreen},
  About: {screen: Aboutscreen}
}, {
  initialRouteName: "Home"
});

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});