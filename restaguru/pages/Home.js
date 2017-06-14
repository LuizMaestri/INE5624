import React, { Component } from 'react';
import { Content, Body, InputGroup, Input, Item } from 'native-base';

export default class Home extends Component {
    render(){
        return (
                <Body>
                    <Item style={styles.searchInput} regular>
                        <Input placeholder="Regular Textbox"/>
                    </Item>
                </Body>
        );
    }
}

const styles = {
    searchInput: {
        margin: 10,
        width: '90%'
    }
}