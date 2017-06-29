import React, { Component } from 'react'
import { Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class KnobGrade extends Component {
    render(){
        let { color, grade } = this.props;
        let { external } = styles;
        if (!color){
            color = '#000';
        }
        return (
            <LinearGradient colors={ [ color, '#fff' ] } locations={ [ 0, 0.01 * grade ] } style={ external }>
                <View style={ styles.inner }>
                    <Text style={ styles.grade }>
                        { grade }
                    </Text>
                </View>
            </LinearGradient>
        );
    }
}

const styles = {
    external: {
        marginTop: -10,
        marginLeft: 0,
        marginRight: 0,
        borderRadius: 50,
        width: 90,
        height: 90,
        borderColor: 'black',
        alignItems: 'center'
    },
    inner: {
        top: 20,
        alignItems: 'center',
        borderRadius: 50,
        width: 50,
        height: 50,
        backgroundColor: '#fff'
    },
    grade: {
        top: 10,
        fontSize: 20
    }
}