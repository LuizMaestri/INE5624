import React, { Component } from 'react';
import { ScrollView , View } from 'react-native';
import { Button, CheckBox, Label } from 'native-base';
import BorderInput from '../components/BorderInput';
import SliderGrade from '../components/SliderGrade';

export default class AdvanceSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: props.filter
        };
        this.handlerNameTyping = this.handlerNameTyping.bind(this);
        this.handlerCountryTyping = this.handlerCountryTyping.bind(this);
        this.handlerCityTyping = this.handlerCityTyping.bind(this);
        this.handlerPrice = this.handlerPrice.bind(this);
        this.handlerAtmosphere = this.handlerAtmosphere.bind(this);
        this.handlerFood = this.handlerFood.bind(this);
        this.handlerSatisfaction = this.handlerSatisfaction.bind(this);
        this.handlerSubmit = this.handlerSubmit.bind(this);
        this.handlerCheckPrice = this.handlerCheckPrice.bind(this)
        this.handlerCheckAtmosphere = this.handlerCheckAtmosphere.bind(this)
        this.handlerCheckFood = this.handlerCheckFood.bind(this)
        this.handlerCheckSatisfaction = this.handlerCheckSatisfaction.bind(this)
    }

    get filter(){
        return this.state.filter;
    }

    set filter(filter){
        this.setState({ filter });
    }

    handlerNameTyping(name){
        let { filter } = this;
        filter.name = name;
        this.filter = filter;
    }

    handlerCountryTyping(country){
        let { filter } = this;
        filter.country = country;
        this.filter = filter;
    }

    handlerCityTyping(city){
        let { filter } = this;
        filter.city = city;
        this.filter = filter;
    }

    handlerPrice(price) {
        let { filter } = this;
        filter.price.value = parseInt(price);
        this.filter = filter;
    }

    handlerAtmosphere() {
        let { filter } = this;
        filter.atmosphere.value = parseInt(atmosphere);
        this.filter = filter;
    }
    
    handlerFood() {
        let { filter } = this;
        filter.food.value = parseInt(food);
        this.filter = filter;
    }
    
    handlerSatisfaction() {
        let { filter } = this;
        filter.satisfaction.value = parseInt(satisfaction);
        this.filter = filter;
    }

    handlerCheckPrice() {
        let { filter } = this;
        filter.price.using = !filter.price.using
        this.filter = filter;
    }

    handlerCheckAtmosphere() {
        let { filter } = this;
        filter.atmosphere.using = !filter.atmosphere.using
        this.filter = filter;
    }
    
    handlerCheckFood() {
        let { filter } = this;
        filter.food.using = !filter.food.using
        this.filter = filter;
    }
    
    handlerCheckSatisfaction() {
        let { filter } = this;
        filter.satisfaction.using = !filter.satisfaction.using
        this.filter = filter;
    }

    handlerSubmit(){
        this.props.filter = this.state.filter;
        const Home = require('./Home').default;
        this.props.navigate(<Home { ...this.props }/>);
    }

    render(){
        let { filter } = this;
        let { price, atmosphere, food, satisfaction } = filter;
        return (
            <ScrollView>
                <BorderInput placeholder={ 'Restaurant/Guru' } onChangeText={ this.handlerNameTyping }/>
                <BorderInput placeholder={ 'Country' } onChangeText={ this.handlerCountryTyping }/>
                <BorderInput placeholder={ 'City' } onChangeText={ this.handlerCityTyping }/>
                <View style={ { flex: 1 } }>
                    <CheckBox checked={ price.using } onPress={ this.handlerCheckPrice }/>
                    <SliderGrade disabled={ !price.using } value={ filter.priceValue } name={ 'Price' } minimumTrackTintColor='#30a935' { ...styles.foodSlider } onValueChange={ this.handlerPrice }/>
                </View>
                <View>
                    <CheckBox checked={ atmosphere.using }  onPress={ this.handlerCheckAtmosphere }/>
                    <SliderGrade disabled={ !atmosphere.using } value={ filter.atmosphereValue } name={ 'Atmosphere' } minimumTrackTintColor='#30a935' { ...styles.foodSlider } onValueChange={ this.handlerAtmosphere }/>
                </View>
                <View>
                    <CheckBox checked={ food.using }  onPress={ this.handlerCheckFood }/>
                    <SliderGrade disabled={ !food.using } value={ filter.foodValue } name={ 'Food' } minimumTrackTintColor='#30a935' { ...styles.foodSlider } onValueChange={ this.handlerFood }/>
                </View>
                <View>
                    <CheckBox checked={ satisfaction.using }  onPress={ this.handlerCheckSatisfaction }/>
                    <SliderGrade disabled={ !satisfaction.using } value={ filter.satisfactionValue } name={ 'Satisfaction' } minimumTrackTintColor='#30a935' { ...styles.foodSlider } onValueChange={ this.handlerSatisfaction }/>
                </View>
                <Button full success onPress={ this.handlerSubmit  }>
                    <Label>Search</Label>
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