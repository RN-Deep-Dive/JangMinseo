import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { MainScreen } from '../screens/MainScreen';
import { DetailScreen } from '../screens/DetailScreen';
import { AddScreen } from '../screens/AddScreen';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

type ScreenParms = {
   Main:undefined;
   Add:{latitude:number; longitude:number; address:string};
   Detail:{latitude:number; longitude:number; address:string; title:string};
}

const Stack = createNativeStackNavigator<ScreenParms>();

export const RootNavigation: React.FC = () => {
    return (
        <Stack.Navigator
         screenOptions={{
            headerShown: false,
            presentation: 'containedModal',
         }}>
            {/* <Stack.Screen */}
            <Stack.Screen name='Main' component={MainScreen} />
            <Stack.Screen name='Add' component={AddScreen} />
            <Stack.Screen name='Detail' component={DetailScreen} />
         </Stack.Navigator>
    )
}

// Navigation과 Route가 타입 추론이 가능하도록
export const useRootNavigation = <RouteName extends keyof ScreenParms>() =>
  useNavigation<NativeStackNavigationProp<ScreenParms, RouteName>>();

export const useRootRoute = <RouteName extends keyof ScreenParms>() =>
  useRoute<RouteProp<ScreenParms, RouteName>>();