import React, { Component } from 'react';
import { Image } from 'react-native';
import { Button, Icon } from 'native-base';

export default class PhotoTaker extends Component {
    constructor(){
        super();
        this.state = {
            photo: null
        };
        this.picker = this.picker.bind(this);
    }

    picker() {}

    render(){
        if(!this.state.photo){
            return (
                <Button small onPress={ this.picker }>
                    <Icon name="camera"/>
                </Button>
            );
        }
        return (<Image source={ this.state.photo }/>);
    }
}