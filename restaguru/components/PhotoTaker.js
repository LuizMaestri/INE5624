import React, { Component } from 'react';
import { Image } from 'react-native';
import { Button, Icon } from 'native-base';
import ImagePicker from 'react-native-image-picker';

export default class PhotoTaker extends Component {
    constructor(){
        super();
        this.state = {
            photo: null
        };
        this.picker = this.picker.bind(this);
    }

    picker() {
        const options = {
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            storageOptions: {
                skipBackup: true
            }
        };
        ImagePicker.showImagePicker(options, (response) => {
            if (response.error) {
                alert('ImagePicker Error: ', response.error);
            }
            else if (!response.didCancel){
                let photo = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({photo});
                this.props.choosePhoto(photo);
            }
        });
    }

    render(){
        if(!this.state.photo){
            return (
                <Button small onPress={ this.picker } style={ { margin: 10 } }>
                    <Icon name="camera"/>
                </Button>
            );
        }
        return (<Image source={ this.state.photo } style={{width: 80, height: 80, margin: 10}}/>);
    }
}