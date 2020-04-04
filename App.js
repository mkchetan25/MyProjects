/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {View, Dimensions, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Homescreen from './components/Homescreen';
import Aboutscreen from './components/Aboutscreen';

const {width: viewportWidth} = Dimensions.get('window');

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer style={{width: viewportWidth}}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Homescreen} />
          <Stack.Screen name="About" component={Aboutscreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
