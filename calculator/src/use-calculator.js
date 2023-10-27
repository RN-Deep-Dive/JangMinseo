import { useState } from "react";

export const useCalculator = () => {
    const [input, setInput] = useState(0); // input
    const [currentOperator, setCurrentOperator] = useState(null); // 현재 연산자
    const [result, setResult] = useState(null); // 그때 그때의 result
    const [tempInput, setTempInput] = useState(null); // 저장되어있는 input 값
    const [tempOperator, setTempOperator] = useState(null); // 저장되어있는 연산자 값
    const [isClickedOperator, setIsClickedOperator] = useState(false);
    const [isClickedEqual, setIsClickedEqual] = useState(false);
  
  //   const hasInput = input ? true : false;
    const hasInput = !!input;
  
  const onPressNum = (num) => {
      // 연산을 하는 중이고, 방금 연산자 버튼을 눌렀음 -> input에 새로 값 저장
      if (currentOperator && isClickedOperator) {
          setResult(input); // 원래 input 저장
          setInput(num); // 아니근데이러며는 한자리수연산밖에 못해???????????
          setIsClickedOperator(false);
      } else {
          // 연산을 하는 중이 아니거나, 다음 피연산자가 두 자리 수 이상일 때
          const newInput = Number(`${input}${num}`);
      setInput(newInput);
      }
  }
  
  const onPressOperator = (operator) => {
      if (operator !== "=") {
          setCurrentOperator(operator);
          setIsClickedOperator(true);
          setIsClickedEqual(false);
      } else {
          let finalResult = result;
          const finalInput = isClickedEqual? tempInput : input;
          const finalOperator = isClickedEqual? tempOperator : currentOperator;
          switch(finalOperator) {
              case '+':
                  finalResult = result + finalInput;
                  break;
              case '-':
                  finalResult = result - finalInput;
                  break;
              case '*':
                  finalResult = result * finalInput;
                  break;
              case '/':
                  finalResult = result / finalInput;
                  break;
              default:
                  break;
          }
          setResult(finalResult);
          setInput(finalResult);
          setTempInput(finalInput);
          setCurrentOperator(null);
          setTempOperator(finalOperator);
          setIsClickedEqual(true);
      }
  }
  
  const onPressReset = () => {
      if (hasInput) {
          setInput(0);
      } else {
          setInput(0);
          setCurrentOperator(null);
          setResult(null);
          setTempInput(null);
          setTempOperator(null);
      }
      
  }

  return {
    input,
    currentOperator,
    result,
    tempInput,
    tempOperator,
    hasInput,
    onPressNum,
    onPressOperator,
    onPressReset,
  }
};