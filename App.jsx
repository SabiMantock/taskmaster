import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Glossary } from './screens/glossary/glossary';
import Home from './screens/home/home.component';

export default function App () {
  return (
    <View style={styles.container}>
      {/* <Home /> */}
      <Glossary />
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
