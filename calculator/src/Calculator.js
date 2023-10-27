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
        flex,
        backgroundColor,
        justifyContent: "center",
        alignItems: "center",
        // paddingVertical: 15,
        height: 50,
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
    min-height: 50px;
    justify-content: center;
    align-items: flex-end;
    padding: 10px 5px;
`; // 숫자들이 늘어나면 그 크기에 따라 늘어나도록 할 것임

export default () => {
  const [input, setInput] = useState(0); // input
  const [currentOperator, setCurrentOperator] = useState(null); // 현재 연산자
  const [result, setResult] = useState(null); // 그때 그때의 result
  const [tempInput, setTempInput] = useState(null); // 저장되어있는 input 값
  const [tempOperator, setTempOperator] = useState(null); // 저장되어있는 연산자 값
  
const onPressNum = (num) => {
    if (currentOperator) {
        setResult(input); // 원래 input 저장
        setInput(num); // 아니근데이러며는 한자리수연산밖에 못해???????????
    } else {
        const newInput = Number(`${input}${num}`);
    setInput(newInput);
    }
}

const onPressOperator = (operator) => {
    if (operator !== "=") {
        setCurrentOperator(operator);
    } else {
        let finalResult = result;
        switch(currentOperator) {
            case '+':
                finalResult = result + input;
                break;
            case '-':
                finalResult = result - input;
                break;
            case '*':
                finalResult = result * input;
                break;
            case '/':
                finalResult = result / input;
                break;
            default:
                break;
        }
        setResult(finalResult);
        setInput(finalResult);
    }
}

const onPressReset = () => {
    setInput(0);
    setCurrentOperator(null);
    setResult(null);
    setTempInput(null);
    setTempOperator(null);
}

  return (
    <View style={{ flex: 1, width: 250, justifyContent: 'center' }}>
      {/* test text를 쓰는 습관 */}
      <Text>input: {input}</Text>
      <Text>currentOperator: {currentOperator}</Text>
      <Text>result: {result}</Text>
      <Text>tempInput: {tempInput}</Text>
      <Text>tempOperator: {tempOperator}</Text>
      
      {/* 결과 */}
      <InputContainer>
        <Text style={{ color: 'white', fontSize: 35, textAlign: 'right' }}>{input}</Text>
      </InputContainer>

      {/* [AC ~ /] */}
      <ButtonContainer>
        <Button
            type="reset"
            text="AC"
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