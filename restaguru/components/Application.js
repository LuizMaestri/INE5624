import React, { Component } from 'react';
import { Body, Button, Container, Content, Footer, FooterTab, Header, Icon, Left, Title } from 'native-base';
import { Text } from 'react-native';
import { Home, Add, Profile } from '../pages';
import Restaurant from '../entities/Restaurant';

export default class Application extends Component {
  constructor(){
    super();
    this.state = {
      lists : {
        resturants: [
            new Restaurant('Miyoshi', 'a' , 1),
            new Restaurant('Gokoni', 'a' , 1)
        ],
        gurus: []
      },
      tab: null,
      tabName: 'home'
    };
    this.selectTab = this.selectTab.bind(this);
    this.handlerAdd = this.handlerAdd.bind(this);
    this.backHome = this.backHome.bind(this);
  }

  componentWillMount(){
    this.backHome();
  }

  selectTab(tab, tabName){
    return {
      active: this.state.tabName == tabName,
      onPress: () => this.setState({ tab, tabName })
    };
  }

  handlerAdd(resturant){
    let { lists } = this.state;
    let { resturants } = lists;
    resturants.push(resturant);
    lists.resturants = resturants;
    this.setState({ lists });
    this.backHome();
  }

  backHome(){
    let tab = (<Home { ...this.state.lists }/>);
    let tabName = 'home';
    this.setState({ tab, tabName });
  }

  render() {
    return (
        <Container>
          <Header>
            <Left/>
            <Body>
              <Title>
                RESTAGURU
              </Title>
            </Body>
          </Header>
          <Content>
            { this.state.tab }
          </Content>
          <Footer>
            <FooterTab>
              <Button { ...(this.selectTab((<Profile {...this.props}/>), 'profile')) }>
                <Icon name="person"/>
              </Button>
              <Button { ...(this.selectTab((<Home { ...this.state.lists }/>), 'home')) }>
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