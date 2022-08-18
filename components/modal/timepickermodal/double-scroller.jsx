import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import { DotIcon } from '../../../assets/dot-icon';
import { HOURS, MINUTES } from '../../../data';
import { Scroller } from './scroller';

// const { height } = Dimensions.get('window');
const itemHeight = 100;
// console.log(height / 3.8 - itemHeight / 4);
export const DoubleScroller = ({
  hoursChangeHandler = (val) => console.warn({ val }),
  minsChangeHandler = (val) => console.warn({ val }),
}) => {
  const [pointerProp, setPointerProp] = useState({
    bottom: 0,
    width: '100%',
    left: 0,
    top: 120,
  });
  const { container, image, picker } = styles;
  const onLayout = (event) => {
    const { x, y, height, width } = event.nativeEvent.layout;
    const newLayout = {
      bottom: height / 2 - itemHeight / 2,
      width: width,
      left: x,
      top: y,
    };
    console.log({ x, y });
    setPointerProp(newLayout);
  };

  return (
    <View style={container}>
      <Scroller items={HOURS} onChange={hoursChangeHandler} />

      <Scroller items={MINUTES} onChange={minsChangeHandler} />
      <View style={[picker, pointerProp]} onLayout={onLayout}>
        <View pointerEvents="none" />
        <View style={image}>
          <DotIcon width={'12'} height={'12'} fill={'#909CC6'} />
        </View>
      </View>
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
    position: 'relative',
    top: 40,
  },
  picker: {
    position: 'absolute',
    borderWidth: 1,
    borderColor: '#909cc6',
    height: 100,
    width: '100%',
    borderRadius: 25,
    zIndex: -1,
  },
});
