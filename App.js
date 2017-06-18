import Expo from 'expo';
import React, { Component } from 'react';
import { StyleProvider } from 'native-base'; 
import Application from './restaguru/components/Application';
import getTheme from './restaguru/theme/components';
import platform from './restaguru/theme/variables/platform';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: false,
      isReady: false,
    };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      'Ionicons': require('native-base/Fonts/Ionicons.ttf'),
    });

    this.setState({isReady: true});
  }
  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return (
      <StyleProvider  style={getTheme(platform)}>
        <Application/>
      </StyleProvider>
    );
  }
}

