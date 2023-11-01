import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { Provider } from 'react-redux';
import { CounterScreen } from './src/screens/CounterScreen';
// import store from './src/store/store'

export default function App() {
  return (
      <SafeAreaProvider>
          <CounterScreen/> 
      </SafeAreaProvider>
  );
}