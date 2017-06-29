import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'native-base';

export default class BreakLine extends Component {
    render() {
        return (
            <View>
                <Text>{ '\n' }</Text>
            </View>
        );
    }
}