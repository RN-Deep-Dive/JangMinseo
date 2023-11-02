import React, {useCallback} from 'react';
import {Header} from '../components/Header/Header';
import { View } from 'react-native';
import { Spacer } from '../components/Spacer';
import { Button } from '../components/Button';
import { Typography } from '../components/Typography';
import { LottoNumberView } from '../components/LottoNumberView';

export const HomeScreen = (props) => {
    const onPressGetNumber = useCallback (()=>{

    }, [])
    
  return (
    <View style={{flex:1}}>
      <Header>
        <Header.Title title='HOME'></Header.Title>
      </Header>

      <View style={{flex:1, flexDirection:'colomn', justifyContent:'center', paddingHorizontal:12}}>
        <View style={{
            height:250,
            flexDirection:'colum',
            paddingHorizontal:24,
            backgroundColor:'white',
            borderColor:'gray'
        }}>
            <LottoNumberView numbers={[1,2,3,4,5,6]}/>
        </View>
        <Spacer space={20}/>
        <Button onPress={onPressGetNumber}>
            <View style={{backgroundColor:'black', padding:24, alignItems:'center' }}>
                <Typography color='white' fontSize={18}>로또 번호 추출하기</Typography>
            </View>
        </Button>
      </View>
    </View>
  )
}