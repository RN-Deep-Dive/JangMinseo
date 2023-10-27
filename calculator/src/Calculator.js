import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components/native';

const COLOR = {
    RESULT: '#4e4c51',
    RESET: '#5f5e62',
    OPERATOR: '#f39c29',
    NUM: '#5c5674',
  }

// Button type: 'reset' | 'operator' | 'num'
const Button = ({ text, onPress, flex, type }) => {
    const backgroundColor =
     type === 'reset'
     ?  COLOR.RESET
     : type === 'operator'
     ? COLOR.OPERATOR
     : type === 'num' 
     ? COLOR.NUM : 'transparent';

  return (
    <TouchableOpacity onPress={onPress} style={{ 
        flex,
        backgroundColor,
        justifyContent: "center",
        alignItems: "center",
        // paddingVertical: 15,
        height: 50,
        borderWidth: 0.25,
        borderColor: 'black',
        }}>
        <Text style={{ color: 'white', fontSize: 25 }}>{text}</Text>
    </TouchableOpacity>
  )
}

const ButtonContainer = styled.View`
    flex-direction: row;
    width: 100%;
`;

const InputContainer = styled.View`
    background-color: ${COLOR.RESULT};
    min-height: 50px;
    justify-content: center;
    align-items: flex-end;
    padding: 10px 5px;
`; // 숫자들이 늘어나면 그 크기에 따라 늘어나도록 할 것임

export default () => {
  const [input, setInput] = useState(0); // input
  const [currentOperator, setCurrentOperator] = useState(null); // 현재 연산자
  const [result, setResult] = useState(null); // 그때 그때의 result
  const [tempInupt, setTempInput] = useState(null); // 저장되어있는 input 값
  const [tempOperator, setTempOperator] = useState(null); // 저장되어있는 연산자 값
  
  return (
    <View style={{ flex: 1, width: 250, justifyContent: 'center' }}>
      {/* 결과 */}
      <InputContainer>
        <Text style={{ color: 'white', fontSize: 35, textAlign: 'right' }}>{input}</Text>
      </InputContainer>

      {/* [AC ~ /] */}
      <ButtonContainer>
        <Button
            type="reset"
            text="AC"
            onPress={() => null}
            flex={3}
        />
        <Button
            type="operator"
            text="/"
            onPress={() => null}
            flex={1}
        />
      </ButtonContainer>
    
      {/* [7 ~ x] */}
      <ButtonContainer>
        <Button
            type="num"
            text="7"
            onPress={() => null}
            flex={1}
        />
        <Button
            type="num"
            text="8"
            onPress={() => null}
            flex={1}
        />
        <Button
            type="num"
            text="9"
            onPress={() => null}
            flex={1}
        />
        <Button
            type="operator"
            text="X"
            onPress={() => null}
            flex={1}
        />
      </ButtonContainer>

      {/* [4 ~ -] */}
      <ButtonContainer>
        <Button
            type="num"
            text="4"
            onPress={() => null}
            flex={1}
        />
        <Button
            type="num"
            text="5"
            onPress={() => null}
            flex={1}
        />
        <Button
            type="num"
            text="6"
            onPress={() => null}
            flex={1}
        />
        <Button
            type="operator"
            text="-"
            onPress={() => null}
            flex={1}
        />
      </ButtonContainer>

      {/* [1 ~ +] */}
      <ButtonContainer>
        <Button
            type="num"
            text="1"
            onPress={() => null}
            flex={1}
        />
        <Button
            type="num"
            text="2"
            onPress={() => null}
            flex={1}
        />
        <Button
            type="num"
            text="3"
            onPress={() => null}
            flex={1}
        />
        <Button
            type="operator"
            text="+"
            onPress={() => null}
            flex={1}
        />
      </ButtonContainer>

      {/* [0 ~ =] */}
      <ButtonContainer>
        <Button
            type="num"
            text="0"
            onPress={() => null}
            flex={3}
        />
        <Button
            type="operator"
            text="="
            onPress={() => null}
            flex={1}
        />
      </ButtonContainer>
    </View>
  )
}