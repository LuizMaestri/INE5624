import React, { Component } from 'react';
import { Container, Content, Card, CardItem, ListItem, List, Text, Thumbnail } from 'native-base';

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
                <CardItem header style={ { marginTop: -10, marginBottom: -10 } }>
                    <Text>
                        { restaurant.name }
                    </Text>
                </CardItem>
                <CardItem style={ { marginTop: -10 } }>
                    <Thumbnail square source={ img }/>
                    <Text>
                        { restaurant.address + '\n' + restaurant.satisfaction }
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
                return filter == '' || restaurant.name.toUpperCase().includes(filter.toUpperCase());
            }
        ).map(
            ( restaurant ) => {
                return (
                    <ListItem style={ styles.item }  key={ restaurant.id }>
                        <RestaurantCard restaurant={ restaurant }/>
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