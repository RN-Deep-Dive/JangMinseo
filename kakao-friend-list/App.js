import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform, FlatList } from 'react-native';
import Header from './src/Header';
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'
import MyProfile from './src/MyProfile';
import { friendProfiles, myProfile } from './src/data';
import Margin from './src/Margin' 
import Division from './src/Division';
import FriendSection from './src/FriendSection';
import FriendList from './src/FriendList';
import TabBar from './src/TabBar';

const statusBarHeight = getStatusBarHeight(true);
const bottomSpace = getBottomSpace();

export default function App() {
  const [isOpened, setIsOpened] = useState(true);
  const [selectedTabIdx, setSelectedTabIdx] = useState(0);

  const onPressArrow = () => {
    setIsOpened(!isOpened);
  }

  const ItemSeparatorComponent = () => <Margin height={13} /> 

  // FlatList 사용
  // return (
  //   <View style={styles.container}>
  //     <FlatList
  //       data={friendProfiles}
  //       keyExtractor={(_, index) => index}
  //       ItemSeparatorComponent={ItemSeparatorComponent}
  //       renderItem={(item) => (
  //         <MyProfile
  //           uri={item.uri}
  //           name={item.name}
  //           introduction={item.introduction}
  //         />
  //       )} />
  //   </View>
  // )

  return (
    // <SafeAreaProvider>
      <View style={styles.container} >
        <View style={{ flex: 1, paddingHorizontal: 15, }} >
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
        </View>

        <TabBar
          selectedTabIdx={selectedTabIdx}
          setSelectedTabIdx={setSelectedTabIdx}
        />
      </View>
    // </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: statusBarHeight,
    paddingBottom: Platform.OS == 'ios'? bottomSpace : false,
    paddingHorizontal: 15
  },
});
