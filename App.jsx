import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Glossary } from './screens/glossary/glossary';
import Home from './screens/home/home.component';

export default function App () {
  return (
    <GestureHandlerRootView style={styles.container}>
      <View>
        {/* <Home /> */}
        <Glossary />
        <StatusBar style="auto" />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFBFE',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
