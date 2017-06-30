import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Text } from 'native-base';
import BorderInput from '../components/BorderInput';
import ResultSearch from '../components/ResultSearch';
import { AdvanceSearch } from './';
import { Filter } from '../entities';
import BreakLine from '../components/BreakLine';
import CacheStore from 'react-native-cache-store';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            filter: new Filter()
        };
        this.handlerNameTyping = this.handlerNameTyping.bind(this);
        this.advanced = this.advanced.bind(this);
    }

    componentWillMount(){
        this.setState({ ...this.props });
    }

    handlerNameTyping(name){
        clearTimeout(this.timeout);
        let { filter } = this.state;
        filter.name = name;
        this.timeout = setTimeout(() => {
            let log = { action:`search for ${name}`, date: new Date().toString() };
            CacheStore.get('user').then(user=>{
                CacheStore.get(user).then((value)=>{
                    value.push(log);
                    CacheStore.set(user, value, 24 * 60);
                })
            });
            this.setState({ filter })
        }, 200);
    }

    advanced(){
        let log = { action: 'Click on Advanced Search', date: new Date().toString() };
        CacheStore.get('user').then(user=>{
            CacheStore.get(user).then((value)=>{
                value.push(log);
                CacheStore.set(user, value, 24 * 60);
            })
        });
        this.props.navigate((<AdvanceSearch { ...this.state } { ...this.props } />));
    }

    render(){
        return (
            <ScrollView>
                <BorderInput placeholder={ 'Search' } onChangeText={ this.handlerNameTyping }/>
                <Text style={ styles.advanced } onPress={ this.advanced }> { '+ Advanced Search'} </Text>
                <BreakLine/>
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
