import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { Icon, Label, Text } from 'native-base';
import BorderInput from '../components/BorderInput';
import PhotoSlider from '../components/PhotoSlider';
import { imageDefault } from '../Constants';
import { RestaurantSegment } from '../components/Restaurant';
import BreakLine from '../components/BreakLine';
import KnobGrade from '../components/KnobGrade';
import { saveLog } from '../utils/Log';

export default class RestaurantPage extends Component {
    render(){
        let { restaurant, navigate, setBackFunc } = this.props;
        let { photos } = restaurant
        if (photos.length === 0){
            photos = [ imageDefault ];
        }
        let log = {action: `Visualize ${restaurant.name}\`s Pages`, date: new Date().toString()};
        saveLog(log);
        return (
            <ScrollView style={ styles.container }>
                <Label>{ restaurant.name }</Label>
                <Label>{ restaurant.addressStr }</Label>
                <BreakLine/>
                <View style={ styles.nav }>
                    <View style={ styles.navItem }>
                        <KnobGrade grade={ restaurant.food } color={ '#f26b38' }/>
                        <Text>{ 'Atmosphere' }</Text>
                    </View>
                    <View style={ styles.navItem }>
                        <KnobGrade grade={ restaurant.satisfaction } color={ '#f26b38' }/>
                        <Text>{ ' Satisfaction' }</Text>
                    </View>
                    <View style={ { ...styles.navItem, marginLeft: -30, paddingLeft: 20 } }>
                        <KnobGrade grade={ restaurant.food } color={ '#f26b38' }/>
                        <Text>{ 'Food' }</Text>
                    </View>
                </View>
                <View>
                    <Text style={ { color: 'green' } }><Icon style={ { color: 'green', fontSize: 16 } } name="cash"/>{ '  ' + restaurant.price } </Text>
                </View>
                <PhotoSlider { ...{ photos } }/>
                <RestaurantSegment { ...{ restaurant, navigate, setBackFunc } }/>
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