import React, { Component } from 'react';
import { View } from 'react-native';
import { List, ListItem, Card, CardItem, Text, Thumbnail } from 'native-base';
import { imageDefault } from '../Constants';

class Rating extends Component {
    render() {
        let { rating } = this.props;
        let { user } = rating;
        return (
            <ListItem>
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
            </ListItem>
        );
    }
}

export default class RatingList extends Component {
    render() {
        let { ratings } = this.props
        return (
            <List>
                { ratings.map((rating)=> (<Rating key={ rating.id } { ...{ rating } }/>)) }
            </List>
        );
    }
}