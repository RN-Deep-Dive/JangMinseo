import React from 'react';
import {Header} from '../components/Header/Header';
import { View } from 'react-native';

export const HomeScreen = (props) => {
  return (
    <View style={{flex:1}}>
      <Header>
        <Header.Title title='HOME'></Header.Title>
      </Header>
    </View>
  )
}