import React, { Component } from 'react';
import { Body, Button, Container, Content, Footer, FooterTab, Header, Icon, Left, Title } from 'native-base';
import { Platform, Text } from 'react-native';
import { Home, Add, Profile, Initial } from '../pages';
import { Address, Restaurant } from '../entities';
import CacheStore from 'react-native-cache-store';

export default class Application extends Component {
  constructor(){
    super();
    this.state = {
      lists : {
        restaurants: [],
        gurus: [],
        //macGyver
        navigate: tab =>  this.setState({ tab }),
        setBackFunc: back => this.setState({ back })
      },
      tab: null,
      tabName: 'home',
      back: null
    };
    this.selectTab = this.selectTab.bind(this);
    this.handlerAdd = this.handlerAdd.bind(this);
    this.backHome = this.backHome.bind(this);
    this.returnPage = this.returnPage.bind(this);
  }

  componentDidMount(){
    CacheStore.get('restaurants').then(restaurants => {
      if (!restaurants){
        restaurants = []
      }
      this.setState({
        lists:{
          restaurants: restaurants.map(Restaurant.cast),
          gurus: this.state.lists.gurus,
          navigate: this.state.lists.navigate,
          setBackFunc: this.state.lists.setBackFunc
        }
      });
    });
  }

  selectTab(tab, tabName){
    return {
      active: this.state.tabName == tabName,
      onPress: () => this.setState({ tab, tabName })
    };
  }

  handlerAdd(restaurant){
    let { lists } = this.state;
    let { restaurants } = lists;
    restaurant = Restaurant.cast(restaurant);
    let add = true;
    restaurants = restaurants.map(rest =>{
      rest = Restaurant.cast(rest);
      if (rest.equals(restaurant)){
        add = false;
        let { ratings, photos } = rest;
        ratings.push(restaurant.ratings[0]);
        photos = photos.concat(restaurant.photos);
        rest.ratings = ratings;
        rest.photos = photos;
      }
      return rest;
    });
    if (add){
      restaurants.push(restaurant);
    }
    CacheStore.set('restaurants', restaurants, 24 * 60);
    lists.restaurants = restaurants;
    this.setState({ lists });
    this.backHome();
  }

  backHome(){
    let tab = (<Home onSubmit={ this.handlerAdd }  { ...this.state.lists }/>);
    let tabName = 'home';
    this.setState({ tab, tabName });
  }

  returnPage(){
    this.state.back();
    this.setState({ back: null });
  }

  render() {
    let header = (
      <Header>
        {
          this.state.back ? 
            <Left>
              <Button transparent onPress={ this.returnPage }>
                <Icon  name={ Platform.OS === 'ios' ? 'arrow-left': 'arrow-back' }/>
              </Button>
            </Left>
            : <Left/>
        }
        <Body>
          <Title>
            RESTAGURU
          </Title>
        </Body>
      </Header>
    );
    if(!this.state.tab){
      return (
        <Container>
          { header }
          <Content>
            <Initial home={this.backHome}/>
          </Content>
          <Footer>
            <FooterTab>
            </FooterTab>
          </Footer>
        </Container>
      )
    }
    return (
        <Container>
          { header }
          <Content>
            { this.state.tab }
          </Content>
          <Footer>
            <FooterTab>
              <Button { ...(this.selectTab((<Profile {...this.props}/>), 'profile')) }>
                <Icon name="person"/>
              </Button>
              <Button { ...(this.selectTab((<Home onSubmit={ this.handlerAdd } { ...this.state.lists } />), 'home')) }>
                <Icon name="search"/>
              </Button>
              <Button { ...(this.selectTab((<Add onSubmit={ this.handlerAdd }/>), 'add')) }>
                <Icon name="add-circle"/>
              </Button>
            </FooterTab>
          </Footer>
        </Container>
      );
    }
}
