import React, {Component} from 'react';
import {Button, View, Text, Dimensions, StyleSheet} from 'react-native';

const {width: viewportWidth} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    width: 80,
    height: 80,
    backgroundColor: "red",
  },
});

export default class Aboutscreen extends Component {
  constructor(props) {
    super(props);
  }

  _onLayout = ({
    nativeEvent: {
      layout: {x, y, width, height},
    },
  }) => {
    console.log("x", x);
    console.log("y", y);
    console.log("width", width);
    console.log("height", height);
  };
  render() {
    return (
      <View ref={this.myView1}>
        <View style={styles.box} onLayout={this._onLayout} />
      </View>
    );
  }
}
