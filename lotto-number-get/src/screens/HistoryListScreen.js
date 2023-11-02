import { View, Text } from 'react-native'
import React from 'react'
import {Header} from '../components/Header/Header';

export const HistoryListScreen = (props) => {
  return (
    <View style={{flex:1}}>
        <Header>
            <Header.Title title='HISTORY'></Header.Title>
        </Header>
    </View>
  );
}