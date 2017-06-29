import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import PhotoTaker from '../components/PhotoTaker';

export default class PhotoSlider extends Component {
    render(){
        return (
            <ScrollView style={ styles.slider } horizontal>
                {
                    this.props.photos.map(
                        (photo, index) => (
                            <PhotoTaker choosePhoto={ this.props.choosePhoto } photo={ photo } key={ index }/>
                        )
                    )
                }
            </ScrollView>
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