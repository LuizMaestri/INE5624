import React, { Component } from 'react';
import { Container, Content, Text } from 'native-base';
import { ScrollView, View } from 'react-native';
import { Link, NativeRouter, Route, Redirect } from 'react-router-native';
import RestaurantList from './Restaurant';
import GuruList from './Guru';

export default class ResultSearch extends Component {
    render() {
        return (
            <View>
                <NativeRouter>
                    <ScrollView>
                        <View style={styles.nav}>
                            <Link to="/restaurants" style={ styles.navItem }>
                                <Text style={ styles.link }>Restaurants</Text>
                            </Link>
                            <Link to="/gurus"style={ styles.navItem } >
                                <Text style={ styles.link }>Gurus</Text>
                            </Link>
                        </View>
                        <Redirect from="/" to="/restaurants"/>
                        <Route path="/restaurants" component={ () => <RestaurantList { ...this.props }/> }/>
                        <Route path="/gurus" component={ () => (<GuruList { ...this.props }/>) }/>
                    </ScrollView>
                </NativeRouter>
            </View>
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
    link: {
        borderBottomWidth: 1,
        borderBottomColor: '#f26b38'
    }
};