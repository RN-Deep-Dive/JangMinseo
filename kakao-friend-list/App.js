import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform } from 'react-native';
import Header from './src/Header';
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'
import MyProfile from './src/MyProfile';
import { friendProfiles, myProfile } from './src/data';
import Margin from './src/Margin' 
import Division from './src/Division';
import FriendSection from './src/FriendSection';
import FriendList from './src/FriendList';

const statusBarHeight = getStatusBarHeight(true);
const bottomSpace = getBottomSpace();

export default function App() {
  const [isOpened, setIsOpened] = useState(true);

  const onPressArrow = () => {
    console.log('click arrow!');
    setIsOpened(!isOpened);
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['left', 'right', 'top']} >
        <Header />

        <Margin height={10} />

        <MyProfile 
          uri={myProfile.uri}
          name={myProfile.name}
          introduction={myProfile.introduction}
        />

        <Margin height={13} />

        <Division />

        <Margin height={12} />

        <FriendSection friendProfileLen={friendProfiles.length}
        onPressArrow= {onPressArrow}
        isOpened={isOpened} />
        
        <FriendList data={friendProfiles} isOpened={isOpened} />

      </SafeAreaView>
    </SafeAreaProvider>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: Platform.OS == 'android'? statusBarHeight : false,
    // paddingBottom: Platform.OS == 'ios'? bottomSpace : false,
    paddingHorizontal: 15
  },
});
