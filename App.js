import React, { Component } from 'react';
import { StyleProvider } from 'native-base'; 
import Application from './restaguru/components/Application';
import getTheme from './restaguru/theme/components';
import { Text } from 'react-native';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      theme: require('./restaguru/theme/variables/restaguru').default
    };
    this.changeTheme = this.changeTheme.bind(this);
  }

  changeTheme(theme){
    console.log(this);
    this.setState({ theme });
  }

  async componentDidMount() {
    this.setState({isReady: true});
  }

  render() {
    return (
      <StyleProvider style={getTheme(this.state.theme)}>
        <Application onChangeTheme={ this.changeTheme } theme={this.state.theme}/>
      </StyleProvider>
    );
  }
}

