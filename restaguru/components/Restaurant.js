import React, { Component } from 'react';
import { View } from 'react-native';
import {
    Button,
    Container,
    Content,
    Card,
    CardItem,
    Icon,
    ListItem,
    List,
    Segment,
    Text,
    Thumbnail
} from 'native-base';
import { RestaurantPage, Add } from '../pages';
import { imageDefault } from '../Constants';
import RatingList from '../components/Rating';
import KnobGrade from './KnobGrade';

class RestaurantCard extends Component {
    render(){
        let { restaurant } = this.props;
        let img;
        if (restaurant.photos.length == 0){
            img = imageDefault;
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
                        { '     '+ restaurant.addressStr }
                    </Text>
                </CardItem>
                <CardItem style={ { alignSelf: 'center' } }>
                    <KnobGrade grade={ restaurant.satisfaction } color={ '#f26b38' }/>
                </CardItem>
            </Card>
        );
    }
}

export default class RestaurantList extends Component {
    render(){
        let { filter, restaurants, navigate, onSubmit } = this.props;
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
                        <ListItem style={ styles.item }  key={ restaurant.id } onPress={ () => navigate(<RestaurantPage { ...{ restaurant, navigate } } />) }>
                            <RestaurantCard restaurant={ restaurant } />
                        </ListItem>
                    );
                }
            );
        } else {
            let name = filter.name.toUpperCase().trim();
            cards = (
                <ListItem style={ { ...styles.notFound, ...styles.item } } onPress={ () => navigate(<Add onSubmit={ onSubmit } name={ filter.name }/>) }>
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

export class RestaurantSegment extends Component {
    constructor(){
        super();
        this.state = {
            first: true
        };
        this.handlerChangeSegment = this.handlerChangeSegment.bind(this);
    }

    handlerChangeSegment(){
        this.setState({ first: !this.state.first });
    }

    render(){
        let { restaurant, navigate } = this.props; 
        let segment;
        if (this.state.first){
            segment = (
                <Card>
                    <CardItem>
                        <Text>
                            Kind: { restaurant.kind }
                        </Text>
                    </CardItem>
                </Card>
            );
        } else {
            segment = (
                <RatingList  navigate={ navigate } { ...restaurant }/>
            );
        }
        return (
            <View>
                <Segment>
                    <Button active={ this.state.first } onPress={ () => this.handlerChangeSegment() }>
                        <Text>
                            Infos
                        </Text>
                    </Button>
                    <Button active={ !this.state.first } onPress={ () => this.handlerChangeSegment() }>
                        <Text>
                            Notes
                        </Text>
                    </Button>
                </Segment>
                { segment }
            </View>
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