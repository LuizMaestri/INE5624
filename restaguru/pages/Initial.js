import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'native-base';
import BorderInput from '../components/BorderInput';
import CacheStore from 'react-native-cache-store';
import { okAlert } from '../utils/Alert';

export default class Initial extends Component {
    constructor(){
        super();
        this.state = {
            name: ''
        }
        this.saveUser = this.saveUser.bind(this);
    }

    saveUser(){
        if (!this.state.name){
            return okAlert('Name invalid', 'Please typing your name');
        }
        let log = { action:'login', date: new Date().toString() }
        CacheStore.set('user', this.state.name, 24*60);
        CacheStore.set(this.state.name, [log], 24*60);
        this.props.home();
    }
    render(){
        return (
            <View>
                <BorderInput placeholder={ 'Name' } onChangeText={ (name)=> this.setState({ name }) }/>
                <Button full onPress={this.saveUser}>
                    <Text>
                        Login
                    </Text>
                </Button>
            </View>
        );
    }
}