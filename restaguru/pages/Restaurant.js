import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { Label, Text } from 'native-base';
import BorderInput from '../components/BorderInput';

export default class RestaurantPage extends Component {
    render(){
        let { restaurant } = this.props;
        return (
            <ScrollView style={ styles.container }>
                <Label>{ restaurant.name }</Label>
                <Label>{ restaurant.addressStr + '\n' }</Label>
                <View style={ styles.nav }>
                    <View style={ styles.navItem }>
                        <Text >{ restaurant.atmosphere }</Text>
                        <Text >{ 'Atmosphere' }</Text>
                    </View>
                    <View style={ styles.navItem }>
                        <Text >{ ' ' + restaurant.satisfaction }</Text>
                        <Text >{ ' Satisfaction' }</Text>
                    </View>
                    <View style={ {...styles.navItem, marginLeft: -30, paddingLeft: 20} }>
                        <Text >{ restaurant.food }</Text>
                        <Text >{ 'Food' }</Text>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        margin: 10,
        width: '90%',
        alignSelf: 'center'
    },
    nav: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    navItem: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
    },
}