import React, { Component } from 'react';
import { Text, View } from 'react-native';
import BorderInput from '../components/BorderInput';

export default class LabelInput extends Component {
    render(){
        let { value, name } = this.props;
        return (
            <View style={ styles.container }>
                <Text style={ { margin: 10 } }>{ this.props.label }</Text>
                <BorderInput { ...this.props }/>
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
