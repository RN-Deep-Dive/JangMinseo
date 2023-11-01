import { View, Text } from 'react-native'
import { Header } from '../components/Header/Header'
import React from 'react'

export const CounterScreen = (props) => {

    return (
        <View style={{ flex: 1 }}>
            <Header>
                <Header.Title title='COUNTER'></Header.Title>
            </Header>
        </View>
    )
}