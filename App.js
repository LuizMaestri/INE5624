<<<<<<< HEAD
import Expo from 'expo';
import React, { Component } from 'react';
import { StyleProvider } from 'native-base'; 
import Application from './restaguru/components/Application';
import getTheme from './restaguru/theme/components';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: false,
      isReady: false,
      theme: require('./restaguru/theme/variables/restaguru').default
    };
    this.changeTheme = this.changeTheme.bind(this);
  }

  changeTheme(theme){
    console.log(this);
    this.setState({ theme });
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
    {}
    return (
      <StyleProvider style={getTheme(this.state.theme)}>
        <Application onChangeTheme={ this.changeTheme } theme={this.state.theme}/>
      </StyleProvider>
    );
  }
}

=======
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

>>>>>>> remove_expo
