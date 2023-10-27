import { useState } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import Calculator from './src/Calculator';

export default function App() {
  const [input, setInput] = useState(0); // input
  const [currentOperator, setCurrentOperator] = useState(null); // 현재 연산자
  const [result, setResult] = useState(null); // 그때 그때의 result
  const [tempInupt, setTempInput] = useState(null); // 저장되어있는 input 값
  const [tempOperator, setTempOperator] = useState(null); // 저장되어있는 연산자 값

  return (
    <SafeAreaView style={styles.container}>
      <Calculator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
