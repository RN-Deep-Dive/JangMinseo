import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { MainScreen } from '../screens/MainScreen';
import { DetailScreen } from '../screens/DetailScreen';
import { AddScreen } from '../screens/AddScreen';

const Stack = createNativeStackNavigator();

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