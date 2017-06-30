import React from 'react';
import { Alert } from 'react-native';
import { saveLog } from './Log'

export const okAlert = (title, msg) =>{
    Alert.alert(
        title,
        msg,
        [
            {
                text: 'OK', onPress: () => {
                    let log = {
                        action: 'Alert OK Pressed',
                        date: new Date().toString()
                    }
                    saveLog(log);
                }
            }
        ]
    )
}