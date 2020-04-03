import React, { Component } from 'react';
import { Button, View, Text, Dimensions } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const { width: viewportWidth } = Dimensions.get('window');

export default class Aboutscreen extends Component {
    render () {
        return (
            <View ref="myView1">
                <Text> About Screen </Text>
            </View>
        )
    }

    componentDidMount() {
        this.refs.myView1.measureInWindow((x,y,width,height) => {
            console.log(x,y,width,height)
        });
    }
}