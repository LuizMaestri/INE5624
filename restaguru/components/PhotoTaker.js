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

        /**
         * The first arg is the options object for customization (it can also be null or omitted for default options),
         * The second arg is the callback which sends object: response (more info below in README)
         */
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else {
                // let photo = { uri: response.uri };
                
                // You can also display the image using data:
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