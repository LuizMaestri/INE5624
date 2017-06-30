import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'native-base';
import BorderInput from '../components/BorderInput';
import CacheStore from 'react-native-cache-store';

export default class Initial extends Component {
    constructor(){
        super();
        this.state = {
            name: ''
        }
        this.saveUser = this.saveUser.bind(this);
    }

    saveUser(){
        CacheStore.set(this.state.name, [], 24*60);
        this.props.home();
    }
    render(){
        return (
            <View>
                <BorderInput placeholder={ 'name' } onChangeText={ (name)=> this.setState({ name }) }/>
                <Button full onPress={this.saveUser}>
                    <Text>
                        Login
                    </Text>
                </Button>
            </View>
        );
    }
}