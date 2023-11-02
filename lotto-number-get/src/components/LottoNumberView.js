import { View } from 'react-native'
import React, {useCallback} from 'react'
import { Typography } from './Typography'

export const LottoNumberView = (props) => {

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
    <View style={{flex:1, flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
        {props.numbers.map((item)=>{
            return (
                <View style={{backgroundColor:getNumberBackgroundColor(), width:40, height:40, borderRadius:20, alignItems:'center', justifyContent:'center'}}>
                    <Typography fontSize={20} color='white'>
                        {item}
                    </Typography>
                </View>
            )
        })}
    </View>
  )
}