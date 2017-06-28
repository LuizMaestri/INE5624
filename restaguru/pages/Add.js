import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Button, Label, Icon } from 'native-base';
import BorderInput from '../components/BorderInput';
import SliderGrade from '../components/SliderGrade';
import PhotoSlider from '../components/PhotoSlider';
import LabelInput from '../components/LabelInput';
import Restaurant from '../entities/Restaurant';

export default class Add extends Component {
    constructor(props){
        super(props);
        this.state = Restaurant.factory(name=props.name);
        this.handlerRestaurant = this.handlerRestaurant.bind(this);
        this.handlerAddress = this.handlerAddress.bind(this);
        this.handlerKind = this.handlerKind.bind(this);
        this.handlerFood = this.handlerFood.bind(this);
        this.handlerAtmosphere = this.handlerAtmosphere.bind(this);
        this.handlerPrice = this.handlerPrice.bind(this);
        this.handlerSatisfaction = this.handlerSatisfaction.bind(this);
        this.handlerComment = this.handlerComment.bind(this);
        this.handlerPrivateComment = this.handlerPrivateComment.bind(this);
        this.handlerSubmit = this.handlerSubmit.bind(this);
        this.handlerChoosePhoto = this.handlerChoosePhoto.bind(this);
    }  

    get rating(){
        let tam = this.state.ratings.length;
        return this.state.ratings[tam - 1];
    }

    set rating(rating){
        let { ratings } = this.state
        let tam = ratings.length;
        ratings[tam - 1] = rating;
        this.setState({ ratings });
    }

    get photos(){
        return this.state.photos;
    }

    set photos(photo){
        let { photos } = this.state;
        photos.push(photo);
        this.setState({ photos });
    }

    handlerRestaurant(name){
        this.setState({name});
    }

    handlerAddress(address){
        this.setState({address});
    }

    handlerKind(kind){
        this.setState({kind});
    }

    handlerFood(value){
        let rating = this.rating;
        rating.food = parseInt(value);
        this.rating = rating;
    }

    handlerAtmosphere(value){
        let rating = this.rating;
        rating.atmosphere = parseInt(value);
        this.rating = rating;
    }
    
    handlerPrice(value){
        let rating = this.rating;
        rating.price = parseInt(value);
        this.rating = rating;
    }

    handlerSatisfaction(value){
        let rating = this.rating;
        rating.satisfaction = parseInt(value);
        this.rating = rating;
    }

    handlerComment(value){
        let rating = this.rating;
        rating.comment = value;
        this.rating = rating;
    }

    handlerPrivateComment(value){
        let rating = this.rating;
        rating.privateComment = value;
        this.rating = rating;
    }

    handlerChoosePhoto(photo){
        this.photos = photo
    }

    handlerSubmit(){
        this.props.onSubmit(this.state);
    }

    render(){
        return (
            <ScrollView>
                <BorderInput placeholder={ 'Restaurant' } onChangeText={ this.handlerRestaurant }/>
                <BorderInput placeholder={ 'Address' } onChangeText={ this.handlerAddress }/>
                <BorderInput placeholder={ 'Kind' } onChangeText={ this.handlerKind }/>
                <PhotoSlider photos={ [...this.photos, false] } choosePhoto={ this.handlerChoosePhoto }/>
                <Label style={ { margin: 10 } }>Scores</Label>
                <SliderGrade value={ this.rating.food } name={ 'Food' } minimumTrackTintColor='#30a935' { ...styles.foodSlider } onValueChange={ this.handlerFood }/>
                <SliderGrade value={ this.rating.atmosphere } name={ 'Atmosphere' } minimumTrackTintColor='#30a935' { ...styles.foodSlider } onValueChange={ this.handlerAtmosphere }/>
                <SliderGrade value={ this.rating.price } name={ 'Price' } minimumTrackTintColor='#30a935' { ...styles.foodSlider } onValueChange={ this.handlerPrice }/>
                <SliderGrade value={ this.rating.satisfaction } name={ 'Satisfaction' } minimumTrackTintColor='#30a935' { ...styles.foodSlider } onValueChange={ this.handlerSatisfaction }/>
                <LabelInput label={ 'Comments' } onChangeText={ this.handlerComment } multiline={ true }/>
                <LabelInput label={ 'Private Comments' } onChangeText={ this.handlerPrivateComment } multiline={ true }/>
                <Button full success onPress={ this.handlerSubmit }>
                    <Label>Save</Label>
                </Button>
            </ScrollView>
        );
    }
}

const styles = {
    foodSlider: {
        thumbStyle: {
            width: 30,
            height: 30,
            borderRadius: 30 / 2,
            backgroundColor: 'white',
            borderColor: '#30a935',
            borderWidth: 2
        },
        trackStyle: {
            height: 10,
            borderRadius: 5,
            backgroundColor: 'white',
            borderColor: '#30a935'
        }
    }
}