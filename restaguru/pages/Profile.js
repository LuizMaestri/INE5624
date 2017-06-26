import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { Text, Radio } from 'native-base';
import restaguru from '../theme/variables/restaguru';
import restaguruLight from '../theme/variables/restaguru-light';

export default class Profile extends Component {
    render(){
        let { theme, onChangeTheme } = this.props;
        return(
            <ScrollView>
                <View style={styles.nav}>
                    <View style={styles.navItem}>
                        <Radio onPress={() => onChangeTheme(restaguru)} selected={theme == restaguru} disabled={theme == restaguru} />
                        <Text>Default Theme</Text>
                    </View>
                    <View style={styles.navItem}>
                        <Radio onPress={() => onChangeTheme(restaguruLight)} selected={theme == restaguruLight} disabled={theme == restaguruLight} />
                        <Text>Light Theme</Text>                        
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = {
    nav: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    navItem: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
    },
    active: {
        color: 'green',
        background: 'red'
    }
};
