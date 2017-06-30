import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Button, Label, Icon } from 'native-base';
import BorderInput from '../components/BorderInput';
import SliderGrade from '../components/SliderGrade';
import PhotoSlider from '../components/PhotoSlider';
import LabelInput from '../components/LabelInput';
import { Restaurant } from '../entities';
import { user } from '../Constants'
import { saveLog } from '../utils/Log'
import { okAlert } from '../utils/Alert';

export default class Add extends Component {
    constructor(props){
        super(props);
        this.state = Restaurant.factory(user, props.name);
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
        this.completeSliding = this.completeSliding.bind(this);
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

    completeSliding(slider, value) {
        let log = { action:`set ${slider} in ${value}`, date: new Date().toString() };
        saveLog(log);
    }
    
    handlerRestaurant(name){
        clearTimeout(this.timeoutRestaurant);
        this.timeoutRestaurant = setTimeout(()=>{
            let log = {action: `White ${name} as restaurant\`s name`, date: new Date().toString() }
            saveLog(log);
        }, 200);
        this.setState({name});
    }

    handlerAddress(addressStr){
        clearTimeout(this.timeoutAddress);
        this.timeoutAddress = setTimeout(()=>{
            let log = {action: `White ${addressStr} as restaurant\`s address`, date: new Date().toString() }
            saveLog(log);
        }, 200);
        let { address } = this.state;
        addressStr = addressStr.split(',');
        address.city = addressStr[0].trim();
        if (addressStr.length > 1){
            address.country = addressStr[1].trim();
        }
        this.setState({ address });
    }

    handlerKind(kind){
        clearTimeout(this.timeoutKind);
        this.timeoutKind = setTimeout(()=>{
            let log = {action: `White ${kind} as restaurant\`s kind`, date: new Date().toString() }
            saveLog(log);
        }, 200);
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
        clearTimeout(this.timeoutComment);
        this.timeoutComment = setTimeout(()=>{
            let log = {action: `Add a comment`, date: new Date().toString() }
            saveLog(log);
        }, 200);
        let rating = this.rating;
        rating.comment = value;
        this.rating = rating;
    }

    handlerPrivateComment(value){
        clearTimeout(this.timeoutPrivateComment);
        this.timeoutPrivateComment = setTimeout(()=>{
            let log = {action: `Add a private comment`, date: new Date().toString() }
            saveLog(log);
        }, 200);
        let rating = this.rating;
        rating.privateComment = value;
        this.rating = rating;
    }

    handlerChoosePhoto(photo){
        this.photos = photo
    }

    handlerSubmit(){
        let log;
        let restaurant = this.state;
        if (restaurant.name && restaurant.address.city && restaurant.address.country && restaurant.kind){
            log = { action:`Add ${this.state.name}`, date: new Date().toString() };
            saveLog(log);
            return this.props.onSubmit(restaurant);
        } else{
            let errors = ''
            if(!restaurant.name){
                errors += 'Restaurant`s name is required\n';
            }
            if(!restaurant.address.city || !restaurant.address.country){
                errors += 'Restaurant`s address is required\n';
                errors += 'Restaurant`s address has format (city`s name, country`s name)\n';
            }
            if(!restaurant.kind){
                errors += 'Restaurant`s kind is required\n';
            }
            log = {
                action:`Error on addicting restaurant:\n ${errors}`,
                date: new Date().toString()
            };
            saveLog(log);
            return okAlert('Error on addicting restaurant', errors);
        }
    }

    render(){
        return (
            <ScrollView>
                <BorderInput placeholder={ 'Restaurant' } onChangeText={ this.handlerRestaurant } value={this.state.name}/>
                <BorderInput placeholder={ 'Address (City, Country)' } onChangeText={ this.handlerAddress }/>
                <BorderInput placeholder={ 'Kind' } onChangeText={ this.handlerKind }/>
                <PhotoSlider photos={ [...this.photos, false] } choosePhoto={ this.handlerChoosePhoto }/>
                <Label style={ { margin: 10 } }>Scores</Label>
                <SliderGrade value={ this.rating.food } name={ 'Food' } 
                    minimumTrackTintColor='#30a935' { ...styles.foodSlider } onValueChange={ this.handlerFood }
                    onSlidingComplete={ () => this.completeSliding('Satisfaction', this.rating.satisfaction)}/>
                <SliderGrade value={ this.rating.atmosphere } name={ 'Atmosphere' } 
                    minimumTrackTintColor='#30a935' { ...styles.foodSlider } onValueChange={ this.handlerAtmosphere } 
                    onSlidingComplete={ () => this.completeSliding('Atmosphere', this.rating.atmosphere)}/>
                <SliderGrade value={ this.rating.price } name={ 'Price' } 
                    minimumTrackTintColor='#30a935' { ...styles.foodSlider } onValueChange={ this.handlerPrice }
                    onSlidingComplete={ () => this.completeSliding('Price', this.rating.price)}/>
                <SliderGrade value={ this.rating.satisfaction } name={ 'Satisfaction' } 
                    minimumTrackTintColor='#30a935' { ...styles.foodSlider } onValueChange={ this.handlerSatisfaction }
                    onSlidingComplete={ () => this.completeSliding('Satisfaction', this.rating.satisfaction)}/>
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