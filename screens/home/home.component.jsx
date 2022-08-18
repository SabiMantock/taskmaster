import { StyleSheet, Text, View, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={{ marginLeft: 10 }}>
        <Text
          style={{
            fontSize: width / 20,
            color: '#707070',
          }}
        >
          A clean slate!
        </Text>
        <Text style={{ fontSize: width / 15, color: '#707070' }}>Let's find something todo...</Text>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
});
