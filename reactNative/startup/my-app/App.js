import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Index} from './app/index.js'

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Gowtm</Text>
    //   <StatusBar style="auto" />
    // </View>
    <Index />
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
