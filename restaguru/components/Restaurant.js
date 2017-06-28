import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Icon, ListItem, List, Text, Thumbnail } from 'native-base';
import { RestaurantPage, Add } from '../pages';

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
                <CardItem style={ { marginTop: -10 } } >
                    <Thumbnail square source={ img }/>
                    <Text>
                        { restaurant.addressStr + '\n' + restaurant.satisfaction }
                    </Text>
                </CardItem>
            </Card>
        );
    }
}

export default class RestaurantList extends Component {
    render(){
        let { filter, restaurants } = this.props;
        let filteredRestaurants = restaurants.filter(
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
        )
        let cards;
        if (filteredRestaurants.length !== 0){
            cards = filteredRestaurants.map(
                ( restaurant ) => {
                    return (
                        <ListItem style={ styles.item }  key={ restaurant.id } onPress={ () => this.props.navigate(<RestaurantPage { ...{ restaurant } } />) }>
                            <RestaurantCard restaurant={ restaurant } />
                        </ListItem>
                    );
                }
            );
        } else {
            let name = filter.name.toUpperCase().trim();
            cards = (
                <ListItem style={ { ...styles.notFound, ...styles.item } } onPress={ () => this.props.navigate(<Add onSubmit={ (element) => console.log(element) } name={ filter.name }/>) }>
                    <Text uppercase={ false }>
                        "{name}" Not Found. Verify restaurant`s name on search or {'\n'} 
                        <Text style={ styles.linkAdd }>
                            Click here to Add { ' ' }
                        </Text>
                        <Icon style={ styles.linkAdd } name="add-circle"/>
                    </Text>
                    
                </ListItem>
            );

        }
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
    },
    notFound: {
        flex: 1,
        margin: 10,
        width: '90%',
        alignSelf: 'center'
    },
    linkAdd: {
        color: '#f26b38',
        fontSize: 20
    }
};