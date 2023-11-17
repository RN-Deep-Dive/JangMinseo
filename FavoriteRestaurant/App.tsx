/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, View} from 'react-native';
import { RootNavigation } from './src/navigation/RootNavigation';

const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <NavigationContainer>
        <RootNavigation/> 
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;