import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, Body } from 'native-base';
import { Text } from 'react-native';
import Home from '../pages/Home';

export default class Application extends Component {
  render() {
      return (
        <Container>
          <Header>
            <Body>
              <Title>
                RESTAGURU
              </Title>
            </Body>
          </Header>
          <Content>
            <Home/>
          </Content>
        </Container>
      );
    }
}