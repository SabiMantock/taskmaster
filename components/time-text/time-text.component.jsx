import { Image, StyleSheet, Text, View } from 'react-native';

export const TimeText = () => {
  const { container, text, image } = styles;
  return (
    <>
      <View style={container}>
        <Text style={text}>HH</Text>
        <Text style={text}>MM</Text>
      </View>
      <Image source={require('../../assets/line.png')} style={image} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginBottom: 30,
    marginTop: 60,
  },
  text: {
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.27)',
  },
  image: {
    width: 254,
  },
});
