import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Text } from 'native-base';
import BorderInput from '../components/BorderInput';
import ResultSearch from '../components/ResultSearch';

export default class Home extends Component {
    constructor(){
        super();
        this.state = {
            filter: ''
        };
        this.handlerTyping = this.handlerTyping.bind(this);
    }

    handlerTyping(filter){
        clearTimeout(this.interval);
        this.interval = setInterval(() => this.setState({filter}), 200);
    }

    render(){
        return (
            <ScrollView>
                <BorderInput placeholder={ 'Search' } onChangeText={ this.handlerTyping }/>
                <Text style={ styles.advanced }> + Advanced Search </Text>
                <ResultSearch { ...this.state } { ...this.props }/>
            </ScrollView>
        );
    }
}

const styles = {
    advanced: {
        textAlign: 'right'
    }
};
