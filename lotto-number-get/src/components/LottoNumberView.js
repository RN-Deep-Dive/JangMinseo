import { View, Animated } from 'react-native'
import React, {useCallback, useEffect, useState} from 'react'
import { Typography } from './Typography'

export const LottoNumberView = (props) => {
    const [viewHeight, setViewHeight] = useState(0);
    const [animatedValue] = useState(new Animated.Value(1));

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

    const translateY = animatedValue.interpolate({
        inputRange:[0, 1],
        outputRange: [-viewHeight * 0.6, 0]
    })

    useEffect(()=>{
        animatedValue.setValue(0);

        Animated.timing(animatedValue, {
            duration:1000,
            toValue:1,
        }).start();
    },[props.numbers])

  return (
    <View
     style={{
        overflow:'hidden',
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    }}
     onLayout={({nativeEvent})=>{
        console.log(nativeEvent.layout);
        setViewHeight(nativeEvent.layout.height);
     }}>
        {props.numbers.map((item)=>{
            return (
                <Animated.View
                 style={{
                    backgroundColor:getNumberBackgroundColor(), 
                    width:40,
                    height:40,
                    borderRadius:20,
                    alignItems:'center', 
                    justifyContent:'center',
                    transform:[
                        {
                            translateY: translateY
                        }
                    ]
                     // overflowHidden은 상위 컴포넌트에 준다. 
                      }}>
                    <Typography fontSize={20} color='white'>
                        {item}
                    </Typography>
                </Animated.View>
            )
        })}
    </View>
  )
}