import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';

const { width, height } = Dimensions.get('window');

export const BackgroundImage = () => {
  const { container, image, text } = styles;
  return (
    <View style={container}>
      <Image source={require('../../assets/bg-image.png')} style={image} />
      <Text style={text}>Click to add tasks</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { width: width, height: height / 2, alignItems: 'center', justifyContent: 'center' },
  image: {
    width: 330,
    height: 300,
  },
  text: {
    fontSize: 14,
    textTransform: 'uppercase',
    color: '#909CC6',
    textAlign: 'center',
    marginTop: 30,
  },
});
