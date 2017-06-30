import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { Label, Text, Radio } from 'native-base';
import restaguru from '../theme/variables/restaguru';
import restaguruLight from '../theme/variables/restaguru-light';
import CacheStore from 'react-native-cache-store';

export default class Profile extends Component {
    constructor(){
        super();
        this.state = {
            logs: [],
            user: ''
        }
    }

    async componentWillMount(){
        CacheStore.get('user').then(user=>{
            this.setState({ user});
            CacheStore.get(user).then(value => this.setState({logs: value}));
        });
    }
    render(){
        let { theme, onChangeTheme } = this.props;
        return(
            <ScrollView>
                <View style={styles.nav}>
                    <View style={styles.navItem}>
                        <Radio onPress={() => onChangeTheme(restaguru)} selected={theme == restaguru} disabled={theme == restaguru} />
                        <Text>Default Theme</Text>
                    </View>
                    <View style={styles.navItem}>
                        <Radio onPress={() => onChangeTheme(restaguruLight)} selected={theme == restaguruLight} disabled={theme == restaguruLight} />
                        <Text>Light Theme</Text>                        
                    </View>
                </View>
                <View style={ { marginVertical: 10, marginHorizontal: 15 } }>
                    <Label>{ this.state.user + ':' }</Label>
                    {this.state.logs.map(log=> <Text>{ log.action + '\n' + log.date + '\n\n'}</Text>)}
                </View>
            </ScrollView>
        );
    }
}

const styles = {
    nav: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    navItem: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
    },
    active: {
        color: 'green',
        background: 'red'
    }
};
