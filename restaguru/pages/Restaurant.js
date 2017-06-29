import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { Icon, Label, Text } from 'native-base';
import BorderInput from '../components/BorderInput';
import PhotoSlider from '../components/PhotoSlider';
import { imageDefault } from '../Constants';
import { RestaurantSegment } from '../components/Restaurant';
import BreakLine from '../components/BreakLine';

export default class RestaurantPage extends Component {
    render(){
        let { restaurant, navigate } = this.props;
        let { photos } = restaurant
        if (photos.length === 0){
            photos = [ imageDefault ];
        }
        return (
            <ScrollView style={ styles.container }>
                <Label>{ restaurant.name }</Label>
                <Label>{ restaurant.addressStr }</Label>
                <BreakLine/>
                <View style={ styles.nav }>
                    <View style={ styles.navItem }>
                        <Text>{ restaurant.atmosphere }</Text>
                        <Text>{ 'Atmosphere' }</Text>
                    </View>
                    <View style={ styles.navItem }>
                        <Text>{ ' ' + restaurant.satisfaction }</Text>
                        <Text>{ ' Satisfaction' }</Text>
                    </View>
                    <View style={ { ...styles.navItem, marginLeft: -30, paddingLeft: 20 } }>
                        <Text>{ restaurant.food }</Text>
                        <Text>{ 'Food' }</Text>
                    </View>
                </View>
                <View>
                    <Text style={ { color: 'green' } }><Icon style={ { color: 'green', fontSize: 16 } } name="cash"/>{ '  ' + restaurant.price } </Text>
                </View>
                <PhotoSlider { ...{ photos } }/>
                <RestaurantSegment { ...{ restaurant, navigate } }/>
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