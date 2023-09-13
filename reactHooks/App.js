import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import StateWithClassComponent from './StateWithClassComponent'
import StateWithFunctionalComponent from './StateWithFunctionalComponent'
import UseEffectWithClassComponent from './UseEffectWithClassComponent'
import UseEffectWithFunctionalComponent from './UseEffectWithFunctionalComponent'
import { useState } from "react";

export default function App() {
  const [isTrue, setIsTrue] = useState(true);
  return (
    <View style={styles.container}>
      {/* <StateWithClassComponent /> */}
      {/* {isTrue ? <UseEffectWithClassComponent /> : null} */}
      {/* <UseEffectWithClassComponent /> */}
      <UseEffectWithFunctionalComponent />
      <Button title="toggle" onPress={() => setIsTrue(!isTrue)} />
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
