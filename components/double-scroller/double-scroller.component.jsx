import React, { useEffect, useRef } from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import { HOURS, MINUTES } from '../../data';

import { Scroller } from '../scroller/scroller.component';

const { height } = Dimensions.get('window');
const itemHeight = 100;

export const DoubleScroller = ({
  hoursChangeHandler = (val) => console.warn({ val }),
  minsChangeHandler = (val) => console.warn({ val }),
}) => {
  const { container, image, picker } = styles;

  return (
    <View style={container}>
      <Scroller items={HOURS} onChange={hoursChangeHandler} />
      <Image source={require('../../assets/dot.png')} style={image} />

      <Scroller items={MINUTES} onChange={minsChangeHandler} />
      <View pointerEvents="none" style={picker} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    width: 250,
    marginVertical: 30,
    // borderWidth: 1,
  },
  image: {
    width: 12,
    height: 12,
    alignSelf: 'center',
    bottom: 20,
    position: 'relative',
    bottom: 50,
  },
  picker: {
    position: 'absolute',
    bottom: height / 3.5 - itemHeight / 4,
    borderWidth: 1,
    borderColor: '#909cc6',
    height: 100,
    width: '100%',
    borderRadius: 25,
  },
});
