import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'native-base';
import Slider from 'react-native-slider';

export default class SliderGrade extends Component {
    render(){
        let { value, name } = this.props;
        return (
            <View style={ styles.container }>
                <Text style={ styles.name }> { name } - { value } </Text>
                <Slider maximumValue={ 100 } { ...this.props }/>
            </View>
        );
    }
}

const styles = {
    name: {
        textAlign: 'right'
    },
    container: {
        margin: 10,
        width: '90%',
        alignSelf: 'center'
    }
};
