import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StateWithClassComponent from './StateWithClassComponent'
import StateWithFunctionalComponent from './StateWithFunctionalComponent'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <StateWithClassComponent /> */}
      <StateWithFunctionalComponent />
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
