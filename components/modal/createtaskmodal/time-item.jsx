import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { DotIcon } from '../../../assets/dot-icon';

export const TimeItem = ({ hour = '03', mins = '30' }) => {
  const { container, title, textContainer, text, image } = styles;

  return (
    <View style={container}>
      <Text style={title}>Duration</Text>
      <View style={textContainer}>
        <Text style={text}>{hour}</Text>
        <View style={image}>
          <DotIcon width={'12'} height={'12'} />
        </View>
        <Text style={text}>{mins}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderColor: '#909CC6',
    borderWidth: 2,
    width: '55%',
    height: 100,
    borderRadius: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.27)',
    alignSelf: 'flex-start',
    paddingLeft: 25,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 58,
    color: '#909CC6',
  },
  image: {
    width: 12,
    height: 12,
    marginHorizontal: 10,
  },
});
