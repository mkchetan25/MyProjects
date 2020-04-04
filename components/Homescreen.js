import React, {Component} from 'react';
import {Button, View, Text, Dimensions} from 'react-native';

const {width: viewportWidth} = Dimensions.get('window');

export default class Homescreen extends Component {
  render() {
    return (
      <View ref="myView">
        <Text> Home Screen </Text>
        <Button
          title="Go to About"
          onPress={() => this.props.navigation.navigate('About')}
        />
      </View>
    );
  }
}
