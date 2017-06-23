import React, { Component } from 'react';
import { Container, Content, Card, CardItem, ListItem, List, Text, Thumbnail } from 'native-base';

class RestaurantCard extends Component {
    render(){
        let { restaurant } = this.props;
        return (
            <Card>
                <CardItem header>
                    <Text>
                        { restaurant.name }
                    </Text>
                </CardItem>
                <CardItem>
                    <Thumbnail square source={require('../img/default.png')}/>
                    <Text>
                        { restaurant.address }
                    </Text>
                    <Text>
                        { restaurant.rating }
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