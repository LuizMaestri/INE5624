import React, { Component } from 'react';
import { Body, Button, Container, Content, Footer, FooterTab, Header, Icon, Left, Title } from 'native-base';
import { Text } from 'react-native';
import { Home, Add, Profile, Initial } from '../pages';
import { Address, Restaurant } from '../entities';
import CacheStore from 'react-native-cache-store';

export default class Application extends Component {
  constructor(){
    super();
    this.state = {
      lists : {
        restaurants: [
            new Restaurant('Miyoshi', new Address('Brazil', 'Florianópolis') , 'Japonese'),
            new Restaurant('Gokoni', new Address('Brazil', 'São josé') , 'Japonese')
        ],
        gurus: [],
        //macGyver
        navigate: (tab) =>  this.setState({ tab })
      },
      tab: null,
      tabName: 'home'
    };
    this.selectTab = this.selectTab.bind(this);
    this.handlerAdd = this.handlerAdd.bind(this);
    this.backHome = this.backHome.bind(this);
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
    let tab = (<Home { ...this.state.lists }/>);
    let tabName = 'home';
    this.setState({ tab, tabName });
  }

  render() {
    let header = (
      <Header>
        <Left/>
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
