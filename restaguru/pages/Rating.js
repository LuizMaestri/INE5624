import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { Icon, Label, Text, Thumbnail } from 'native-base';
import { user as defaultUser, imageDefault } from '../Constants';
import BreakLine from '../components/BreakLine';
import KnobGrade from '../components/KnobGrade';

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
        let img = imageDefault;
        if (user.photo){
            img = user.photo;
        }
        return (
            <ScrollView style={ styles.container }>
                <View style={ styles.nav }>
                    <View style={ styles.navItem }>
                        <Label>{ name }</Label>
                        <Label>{ address.city + ', ' + address.country }</Label>
                    </View>
                    <View style={ styles.navItem }>
                        <Thumbnail large source={ img }/>
                    </View>
                </View>
                <BreakLine/>
                <View style={ styles.nav }>
                    <View style={ styles.navItem }>
                        <KnobGrade grade={ rating.atmosphere } color={ '#f26b38' }/>
                        <Text>{ 'Atmosphere' }</Text>
                    </View>
                    <View style={ styles.navItem }>
                        <KnobGrade grade={ rating.satisfaction } color={ '#f26b38' }/>
                        <Text>{ ' Satisfaction' }</Text>
                    </View>
                    <View style={ {...styles.navItem, marginLeft: -30, paddingLeft: 20} }>
                        <KnobGrade grade={ rating.food } color={ '#f26b38' }/>
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