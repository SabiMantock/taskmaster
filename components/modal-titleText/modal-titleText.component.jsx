import { Image, StyleSheet, Text, View } from 'react-native';

export const ModalTitleText = () => {
  const { container, task, duration, image } = styles;
  return (
    <View style={container}>
      <Text style={task}>create task</Text>
      <Image source={require('../../assets/dot.png')} style={image} />
      <Text style={duration}>select duration</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  task: {
    fontSize: 14,
    textTransform: 'uppercase',
    color: '#01d9f7',
  },
  duration: {
    fontSize: 14,
    textTransform: 'uppercase',
    color: '#909cc6',
  },
  image: {
    width: 6,
    height: 6,
    marginHorizontal: 10,
  },
});
