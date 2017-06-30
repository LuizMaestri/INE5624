import React from 'react';
import CacheStore from 'react-native-cache-store';

export const saveLog = (log)=> {
    CacheStore.get('user').then(user=>{
        CacheStore.get(user).then((value)=>{
            value.push(log);
            CacheStore.set(user, value, 24 * 60);
        })
    });
}