import React, { Component } from 'react';
import { Image } from 'react-native';
import { Button, Icon } from 'native-base';
import ImagePicker from 'react-native-image-picker';
import CacheStore from 'react-native-cache-store';

export default class PhotoTaker extends Component {
    constructor(props){
        super(props);
        this.state = {
            photo: props.photo
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
            let log;
            if (response.didCancel){
                log = { action: 'Cancel photo add', date: new Date().toString() };
            } else if (response.error) {
                log = { action: `ImagePicker Error: ${response.error}`, date: new Date().toString() };
            }
            else {
                let photo = { uri: 'data:image/jpeg;base64,' + response.data };
                log = { action: 'Addicting Photo', date: new Date().toString() };
                this.setState({photo});
                this.props.choosePhoto(photo);
            }
            CacheStore.get('user').then(user=>{
                CacheStore.get(user).then((value)=>{
                    value.push(log);
                    CacheStore.set(user, value, 24 * 60);
                })
            });
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