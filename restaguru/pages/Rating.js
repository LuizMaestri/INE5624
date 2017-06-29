import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { Icon, Label, Text } from 'native-base';
import { user as defaultUser } from '../Constants';
import BreakLine from '../components/BreakLine';

class Comment extends Component {
    render(){
        let { comment, privateComment, user } = this.props;
        let myComment = null; 
        if ( user.name === defaultUser.name && privateComment){
            myComment = (
                <View>
                    <Label>
                        Your comment:
                    </Label>
                    <Text>
                        { privateComment }                        
                    </Text>
                </View>
            );
        }
        return (
            <View>
                <View>
                    <Label>
                        User comment:
                    </Label>
                    <Text>
                        { comment }                        
                    </Text>
                </View>
                { myComment }
            </View>
        )
    }
}

export default class RatingPage extends Component {
    render(){
        let { rating, name, address } = this.props;
        let { user } = rating;

        return (
            <ScrollView style={ styles.container }>
                <Label>{ name }</Label>
                <Label>{ address.city + ', ' + address.country }</Label>
                <BreakLine/>
                <View style={ styles.nav }>
                    <View style={ styles.navItem }>
                        <Text>{ rating.atmosphere }</Text>
                        <Text>{ 'Atmosphere' }</Text>
                    </View>
                    <View style={ styles.navItem }>
                        <Text>{ ' ' + rating.satisfaction }</Text>
                        <Text>{ ' Satisfaction' }</Text>
                    </View>
                    <View style={ {...styles.navItem, marginLeft: -30, paddingLeft: 20} }>
                        <Text>{ rating.food }</Text>
                        <Text>{ 'Food' }</Text>
                    </View>
                </View>
                
                <View>
                    <Text style={ { color: 'green' } }><Icon style={ { color: 'green', fontSize: 16 } } name="cash"/>{ '  ' + restaurant.price } </Text>
                </View>
                <Comment comment={ rating.comment } privateComment={ rating.privateComment } { ...{ user } }/>
            </ScrollView>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        margin: 10,
        width: '90%',
        alignSelf: 'center'
    },
    nav: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    navItem: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
    },
}