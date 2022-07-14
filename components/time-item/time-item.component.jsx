import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

export const TimeItem = ({ hours, minutes }) => {
  const { container, title, textContainer, text, image } = styles;

  return (
    <View style={container}>
      <Text style={title}>Duration</Text>
      <View style={textContainer}>
        <Text style={text}>{hours}</Text>
        <Image source={require('../../assets/dot.png')} style={image} />
        <Text style={text}>{minutes}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderColor: '#909CC6',
    borderWidth: 2,
    width: 200,
    height: 120,
    borderRadius: 30,
    justifyContent: 'center',
  },
  title: {
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.27)',
    alignSelf: 'flex-start',
    paddingLeft: 35,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
    color: '#909CC6',
  },
  image: {
    width: 12,
    height: 12,
    marginHorizontal: 10,
  },
});
