import React, { Component } from 'react';
import { Input, Item } from 'native-base';

export default class BorderInput extends Component {
    render(){
        return (
            <Item style={styles.searchInput} regular>
                <Input {...this.props} />
            </Item>
        );
    }
}

const styles = {
    searchInput: {
        margin: 10,
        width: '90%',
        alignSelf: 'center'
    }
}