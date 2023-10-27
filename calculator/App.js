import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [input, setInput] = useState(0); // input
  const [currentOperator, setCurrentOperator] = useState(null); // 현재 연산자
  const [result, setResult] = useState(null); // 그때 그때의 result
  const [tempInupt, setTempInput] = useState(null); // 저장되어있는 input 값
  const [tempOperator, setTempOperator] = useState(null); // 저장되어있는 연산자 값

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
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
