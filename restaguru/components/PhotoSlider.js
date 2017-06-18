import React, { Component } from 'react';
import { View } from 'react-native';
import PhotoTaker from '../components/PhotoTaker';

export default class PhotoSlider extends Component {
    render(){
        return (
            <View style={ styles.slider }>
                <PhotoTaker/>
            </View>
        );
    }
}

const styles = {
    slider:{
        margin: 10,
        width: '90%',
        alignSelf: 'center'
    }
};