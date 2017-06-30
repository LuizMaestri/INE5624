import React, { Component } from 'react';
import { ScrollView , View } from 'react-native';
import { Button, CheckBox, Label } from 'native-base';
import BorderInput from '../components/BorderInput';
import SliderGrade from '../components/SliderGrade';
import { saveLog } from '../utils/Log';

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

    completeSliding(slider, value) {
        let log = { action:`set ${slider} in ${value}`, date: new Date().toString() };
        saveLog(log);
    }

    handlerNameTyping(name){
        clearTimeout(this.timeoutName);
        this.timeoutName = setTimeout(()=>{
            let log = {action: `Set ${name} as restaurant\`s name for search`, date: new Date().toString() }
            saveLog(log);
        }, 200);
        let { filter } = this;
        filter.name = name;
        this.filter = filter;
    }

    handlerCountryTyping(country){
        clearTimeout(this.timeoutCountry);
        this.timeoutCountry = setTimeout(()=>{
            let log = {action: `Set ${country} as restaurant\`s country for search`, date: new Date().toString() }
            saveLog(log);
        }, 200);
        let { filter } = this;
        filter.country = country;
        this.filter = filter;
    }

    handlerCityTyping(city){
        clearTimeout(this.timeoutCity);
        this.timeoutCity = setTimeout(()=>{
            let log = {action: `Set ${city} as restaurant\`s city for search`, date: new Date().toString() }
            saveLog(log);
        }, 200);
        let { filter } = this;
        filter.city = city;
        this.filter = filter;
    }

    handlerPrice(price) {
        let { filter } = this;
        filter.price.value = parseInt(price);
        this.filter = filter;
    }

    handlerAtmosphere(atmosphere) {
        let { filter } = this;
        filter.atmosphere.value = parseInt(atmosphere);
        this.filter = filter;
    }
    
    handlerFood(food) {
        let { filter } = this;
        filter.food.value = parseInt(food);
        this.filter = filter;
    }
    
    handlerSatisfaction(satisfaction) {
        let { filter } = this;
        filter.satisfaction.value = parseInt(satisfaction);
        this.filter = filter;
    }

    handlerCheckPrice() {
        let { filter } = this;
        filter.price.using = !filter.price.using;
        let log;
        if (filter.price.using){
            log = { action: 'Using price as filter', date: new Date().toString()};
        } else {
            log = { action: 'Not using price as filter', date: new Date().toString()};
        }
        saveLog(log);
        this.filter = filter;
    }

    handlerCheckAtmosphere() {
        let { filter } = this;
        filter.atmosphere.using = !filter.atmosphere.using;
        let log;
        if (filter.atmosphere.using){
            log = { action: 'Using atmosphere as filter', date: new Date().toString()};
        } else {
            log = { action: 'Not using atmosphere as filter', date: new Date().toString()};
        }
        saveLog(log);
        this.filter = filter;
    }
    
    handlerCheckFood() {
        let { filter } = this;
        filter.food.using = !filter.food.using;
        let log;
        if (filter.food.using){
            log = { action: 'Using food as filter', date: new Date().toString()};
        } else {
            log = { action: 'Not using food as filter', date: new Date().toString()};
        }
        saveLog(log);
        this.filter = filter;
    }
    
    handlerCheckSatisfaction() {
        let { filter } = this;
        filter.satisfaction.using = !filter.satisfaction.using;
        let log;
        if (filter.satisfaction.using){
            log = { action: 'Using satisfaction as filter', date: new Date().toString()};
        } else {
            log = { action: 'Not using satisfaction as filter', date: new Date().toString()};
        }
        saveLog(log);
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
                    <SliderGrade disabled={ !price.using } value={ filter.priceValue } name={ 'Price' } 
                        minimumTrackTintColor='#30a935' { ...styles.foodSlider } onValueChange={ this.handlerPrice }
                        onSlidingComplete={ () => this.completeSliding('Price', filter.priceValue)}/>
                </View>
                <View>
                    <CheckBox checked={ atmosphere.using }  onPress={ this.handlerCheckAtmosphere }/>
                    <SliderGrade disabled={ !atmosphere.using } value={ filter.atmosphereValue } name={ 'Atmosphere' } 
                        minimumTrackTintColor='#30a935' { ...styles.foodSlider } onValueChange={ this.handlerAtmosphere }
                        onSlidingComplete={ () => this.completeSliding('Atmosphere', filter.atmosphereValue)}/>
                </View>
                <View>
                    <CheckBox checked={ food.using }  onPress={ this.handlerCheckFood }/>
                    <SliderGrade disabled={ !food.using } value={ filter.foodValue } name={ 'Food' } 
                        minimumTrackTintColor='#30a935' { ...styles.foodSlider } onValueChange={ this.handlerFood }
                        onSlidingComplete={ () => this.completeSliding('Food', filter.foodValue)}/>
                </View>
                <View>
                    <CheckBox checked={ satisfaction.using }  onPress={ this.handlerCheckSatisfaction }/>
                    <SliderGrade disabled={ !satisfaction.using } value={ filter.satisfactionValue } name={ 'Satisfaction' } 
                        minimumTrackTintColor='#30a935' { ...styles.foodSlider } onValueChange={ this.handlerSatisfaction }
                        onSlidingComplete={ () => this.completeSliding('Satisfaction', filter.satisfactionValue)}/>
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