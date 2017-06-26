import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import BorderInput from '../components/BorderInput';

export default class RestaurantPage extends Component {
    render(){
        return (
            <ScrollView>
                <BorderInput/>
            </ScrollView>
        );
    }
}