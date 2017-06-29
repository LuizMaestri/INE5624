import React, { Component } from 'react';
import { View } from 'react-native';
import { List, ListItem, Card, CardItem, Text, Thumbnail } from 'native-base';
import { imageDefault } from '../Constants';

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
        let { ratings } = this.props
        let cards = ratings.map(
            (rating)=> (
                <ListItem onPress={}>
                    <Rating key={ rating.id } { ...{ rating } }/>
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