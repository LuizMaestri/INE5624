import React from 'react';
import { Alert } from 'react-native';

export const okAlert = (title, msg) =>{
    Alert.alert(
    title,
    msg,
    [{text: 'OK', onPress: () => console.log('OK Pressed')}]
    )
}