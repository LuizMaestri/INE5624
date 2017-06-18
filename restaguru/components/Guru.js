import React, { Component } from 'react';
import { Container, Content, Card, CardItem, ListItem, List, Text, Thumbnail } from 'native-base';

class GuruCard extends Component {
    render(){
        let { guru } = this.props;
        return (
            <Card>
                <CardItem header>
                    <Text>
                        { guru.name }
                    </Text>
                </CardItem>
                <CardItem>
                    <Thumbnail source={require('../img/default.png')}/>
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