import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform } from 'react-native';
import Header from './src/Header';
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'
import MyProfile from './src/MyProfile';
import { myProfile } from './src/data';
import Margin from './src/Margin' 


const statusBarHeight = getStatusBarHeight(true);
const bottomSpace = getBottomSpace();

export default function App() {
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
      </SafeAreaView>
    </SafeAreaProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: Platform.OS == 'android'? statusBarHeight : false,
    // paddingBottom: Platform.OS == 'ios'? bottomSpace : false,
    backgroundColor: '#fff',
  },
});
