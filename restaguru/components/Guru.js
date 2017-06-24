import React, { Component } from 'react';
import { Container, Content, Card, CardItem, ListItem, List, Text, Thumbnail } from 'native-base';

class GuruCard extends Component {
    render(){
        let { guru } = this.props;
        if (restaurant.photo){
            img = require('../img/default.png');
        } else {
            img = restaurant.photo;
        }
        return (
            <Card>
                <CardItem header  style={ { marginTop: -10, marginBottom: -10 } }>
                    <Text>
                        { guru.name }
                    </Text>
                </CardItem>
                <CardItem style={ { marginTop: -10 } }>
                    <Thumbnail source={ img }/>
                    <Text>
                        { guru.address }
                    </Text>
                    <Text>
                        { guru.age }
                    </Text>
                </CardItem>
            </Card>
        );
    }
}

export default class GuruList extends Component {
    render(){
        let { filter, gurus } = this.props;
        let cards = gurus.filter(
            ( guru ) => {
                return filter = '' || guru.name.toUpperCase().includes(filter.toUpperCase());
            }
        ).map(
            (restaurant) => {
                return (
                    <ListItem style={ styles.item } key={ guru.id }>
                        <GuruCard guru={ guru }/>
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