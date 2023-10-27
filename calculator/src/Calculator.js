import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components/native';
import { useCalculator } from './use-calculator';

const COLOR = {
    RESULT: '#4e4c51',
    RESET: '#5f5e62',
    OPERATOR: '#f39c29',
    NUM: '#5c5674',
  }

const oneBlockWidth = 80; 

// Button type: 'reset' | 'operator' | 'num'
const Button = ({ text, onPress, flex, type, isSelected }) => {
    const backgroundColor =
     type === 'reset'
     ?  COLOR.RESET
     : type === 'operator'
     ? COLOR.OPERATOR
     : type === 'num' 
     ? COLOR.NUM : 'transparent';

  return (
    <TouchableOpacity onPress={onPress} style={{ 
        // flex,
        backgroundColor,
        justifyContent: "center",
        alignItems: "center",
        // paddingVertical: 15,
        height: 50,
        width: oneBlockWidth * flex,
        borderWidth: isSelected? 1 : 0.25,
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
    width: ${oneBlockWidth * 4}px;
    min-height: 50px;
    justify-content: center;
    align-items: flex-end;
    padding: 10px 5px;
`; // 숫자들이 늘어나면 그 크기에 따라 늘어나도록 할 것임

export default () => {
    // Hook 분리: UI에 집중, custom hook에서는 로직에 집중할 수 있게 해줌 / 유지 보수에 용이
    const {
        input,
        currentOperator,
        result,
        tempInput,
        tempOperator,
        hasInput,
        onPressNum,
        onPressOperator,
        onPressReset,
    } = useCalculator(); // 구조분해

  return (
    <View style={{ flex: 1, width: oneBlockWidth * 4, justifyContent: 'center' }}>
      {/* test text를 쓰는 습관 : release 때는 DEV값이 false */}
      {__DEV__ && (
        <>
        <Text>input: {input}</Text>
        <Text>currentOperator: {currentOperator}</Text>
        <Text>result: {result}</Text>
        <Text>tempInput: {tempInput}</Text>
        <Text>tempOperator: {tempOperator}</Text>
        </>
      )}
      
      {/* 결과 */}
      <InputContainer>
        <Text style={{ color: 'white', fontSize: 35, textAlign: 'right' }}>{input}</Text>
      </InputContainer>

      {/* [AC ~ /] */}
      <ButtonContainer>
        <Button
            type="reset"
            text={hasInput ? "C" : "AC"}
            onPress={onPressReset}
            flex={3}
        />
        <Button
            type="operator"
            text="/"
            onPress={() => onPressOperator('/')}
            flex={1}
            isSelected={currentOperator==='/'}
        />
      </ButtonContainer>
    
      {/* [7 ~ x] */}
      <ButtonContainer>
        {[7, 8, 9].map((num) => (
            <Button
                key={`num-${num}`}
                type="num"
                text={`${num}`} // String(num) 이렇게 하지 않아도 됨! 템플릿 리터럴 오키오키
                onPress={() => onPressNum(num)}
                flex={1}
            />
        ))}
        <Button
            type="operator"
            text="*"
            onPress={() => onPressOperator('*')}
            flex={1}
            isSelected={currentOperator==='*'}
        />
      </ButtonContainer>

      {/* [4 ~ -] */}
      <ButtonContainer>
      {[4, 5, 6].map((num) => (
            <Button
                key={`num-${num}`}
                type="num"
                text={`${num}`} // String(num) 이렇게 하지 않아도 됨! 템플릿 리터럴 오키오키
                onPress={() => onPressNum(num)}
                flex={1}
            />
        ))}
        <Button
            type="operator"
            text="-"
            onPress={() => onPressOperator('-')}
            flex={1}
            isSelected={currentOperator==='-'}
        />
      </ButtonContainer>

      {/* [1 ~ +] */}
      <ButtonContainer>
      {[1, 2, 3 ].map((num) => (
            <Button
                key={`num-${num}`}
                type="num"
                text={`${num}`} // String(num) 이렇게 하지 않아도 됨! 템플릿 리터럴 오키오키
                onPress={() => onPressNum(num)}
                flex={1}
            />
        ))}
        <Button
            type="operator"
            text="+"
            onPress={() => onPressOperator('+')}
            flex={1}
            isSelected={currentOperator==='+'}
        />
      </ButtonContainer>

      {/* [0 ~ =] */}
      <ButtonContainer>
        <Button
            type="num"
            text="0"
            onPress={() => onPressNum(0) }
            flex={3}
        />
        <Button
            type="operator"
            text="="
            onPress={() => onPressOperator('=')}
            flex={1}
        />
      </ButtonContainer>
    </View>
  )
}