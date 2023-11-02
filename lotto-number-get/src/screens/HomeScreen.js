import React, {useCallback} from 'react';
import {Header} from '../components/Header/Header';
import { View } from 'react-native';
import { Spacer } from '../components/Spacer';
import { Button } from '../components/Button';
import { Typography } from '../components/Typography';

export const HomeScreen = (props) => {
    const onPressGetNumber = useCallback (()=>{

    }, [])
    const getNumberBackgroundColor = useCallback(()=>{
        const randomNumber = Math.floor((Math.random() * 10)) % 6
        // Math.floor((Math.random() * 10)) : 한 자리수 난수 생성 
        if(randomNumber === 0){
            return 'red';
        }
        if(randomNumber === 1){
            return 'gray';
        }
        if(randomNumber === 2){
            return 'green';
        }
        if(randomNumber === 3){
            return 'green';
        }
        if(randomNumber === 4){
            return 'pink';
        }
        return 'black';
    })
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
            <View style={{flex:1, flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                {[1,2,3,4,5,6].map((item)=>{
                    return (
                        <View style={{backgroundColor:getNumberBackgroundColor(), width:40, height:40, borderRadius:20, alignItems:'center', justifyContent:'center'}}>
                            <Typography fontSize={20} color='white'>
                                {item}
                            </Typography>
                        </View>
                    )
                })}
            </View>
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