import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Text } from 'native-base';
import BorderInput from '../components/BorderInput';
import ResultSearch from '../components/ResultSearch';
import { AdvanceSearch } from './';
import Filter from '../entities/Filter';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            filter: new Filter(),
            navigate: props.navigate
        };
        this.handlerNameTyping = this.handlerNameTyping.bind(this);
        this.advanced = this.advanced.bind(this);
    }

    componentWillMount(){
        this.setState({ ...this.props });
    }

    handlerNameTyping(name){
        clearTimeout(this.interval);
        let { filter } = this.state;
        filter.name = name;
        this.interval = setInterval(() => this.setState({ filter }), 200);
    }

    advanced(){
        this.props.navigate((<AdvanceSearch { ...this.state } { ...this.props } />));
    }

    render(){
        return (
            <ScrollView>
                <BorderInput placeholder={ 'Search' } onChangeText={ this.handlerNameTyping }/>
                <Text style={ styles.advanced } onPress={ this.advanced }> { '+ Advanced Search\n'} </Text>
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
