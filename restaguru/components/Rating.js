import React, { Component } from 'react';
import { View } from 'react-native';
import { List, ListItem, Card, CardItem, Text, Thumbnail } from 'native-base';
import { imageDefault } from '../Constants';
import { RatingPage, RestaurantPage } from '../pages';
import { Restaurant } from '../entities';

class Rating extends Component {
    render() {
        let { rating } = this.props;
        let { user } = rating;
        return (
                <Card>
                    <CardItem header>
                        <Text>
                            { user.name }
                        </Text>
                    </CardItem>
                    <CardItem>
                        <Thumbnail square source={ imageDefault }/>
                        <Text>
                            { rating.comment }
                        </Text>
                    </CardItem>
                </Card>
        );
    }
}

export default class RatingList extends Component {
    back(){
        let restaurant = Restaurant.cast(this.props);
        let { navigate,  setBackFunc } = this.props;
        return () => navigate(<RestaurantPage { ...{ restaurant, navigate, setBackFunc } } />)
    }

    render() {
        this.back = this.back.bind(this);
        let { ratings, navigate, name, address, setBackFunc } = this.props;
        let cards = ratings.map(
            (rating)=> (
                <ListItem key={ rating.id } onPress={ () => navigate(<RatingPage back={ this.back } setBackFunc={ setBackFunc } { ...{ rating, name, address } } />) }>
                    <Rating { ...{ rating } }/>
                </ListItem>
            )
        );
        return (
            <List>
                { cards }
            </List>
        );
    }
}