import React, { Component } from 'react';
import { View } from 'react-native';
import { List, ListItem, Card, CardItem, Text, Thumbnail } from 'native-base';
import { imageDefault } from '../Constants';
import { RatingPage } from '../pages';

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
    render() {
        let { ratings, navigate, name, address } = this.props;
        let cards = ratings.map(
            (rating)=> (
                <ListItem key={ rating.id } onPress={ () => navigate(<RatingPage { ...{ rating, name, address } } />) }>
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