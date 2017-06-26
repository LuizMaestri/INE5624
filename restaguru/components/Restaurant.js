import React, { Component } from 'react';
import { Container, Content, Card, CardItem, ListItem, List, Text, Thumbnail } from 'native-base';
import { RestaurantPage } from '../pages';

class RestaurantCard extends Component {
    render(){
        let { restaurant } = this.props;
        let img;
        if (restaurant.photos.length == 0){
            img = require('../img/default.png');
        } else {
            img = restaurant.photos[0];
        }
        return (
            <Card>
                <CardItem header style={ { marginTop: -10, marginBottom: -10 } } button onPress={this.props.onPress}>
                    <Text>
                        { restaurant.name }
                    </Text>
                </CardItem>
                <CardItem style={ { marginTop: -10 } } button onPress={this.props.onPress}>
                    <Thumbnail square source={ img }/>
                    <Text>
                        { restaurant.addressStr + '\n' + restaurant.satisfaction }
                    </Text>
                    <Text>
                        
                    </Text>
                </CardItem>
            </Card>
        );
    }
}

export default class RestaurantList extends Component {
    render(){
        let { filter, restaurants } = this.props;
        let cards = restaurants.filter(
            ( restaurant ) => {
                let filtered = true;
                if(filter.isEmpty()){
                    return filtered;
                }
                filtered = filtered &&
                    restaurant.name.toUpperCase().includes(filter.name.toUpperCase());
                filtered = filtered &&
                    restaurant.address.country.toUpperCase().includes(filter.country.toUpperCase());
                filtered = filtered &&
                    restaurant.address.city.toUpperCase().includes(filter.city.toUpperCase());
                filtered = filtered && restaurant.satisfaction >= filter.satisfactionValue;
                filtered = filtered && restaurant.food >= filter.foodValue;
                filtered = filtered && restaurant.price >= filter.priceValue;
                filtered = filtered && restaurant.atmosphere >= filter.atmosphereValue;
                return filtered;
            }
        ).map(
            ( restaurant ) => {
                return (
                    <ListItem style={ styles.item }  key={ restaurant.id }>
                        <RestaurantCard restaurant={ restaurant } onPress={ () => this.props.navigate(<RestaurantPage { ...{ restaurant } } />) }/>
                    </ListItem>
                );
            }
        );
        return (
            <List>
                { cards }
            </List>
        );
    }
}

const styles = {
    item: {
        borderBottomWidth: 0
    }
};