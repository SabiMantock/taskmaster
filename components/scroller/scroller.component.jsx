import { forwardRef, useEffect, useRef, useState } from 'react';
import { Dimensions, ScrollView, View, Text, StyleSheet } from 'react-native';
import { HOURS } from '../../data';

const { height } = Dimensions.get('window');

let itemHeight = 100;
const itemsToShow = 8;

export const Scroller = ({ items, onChange = (val) => console.log({ val }) }) => {
  const [itemIndex, setItemIndex] = useState(0);
  const currentIndexRef = useRef(Math.floor(items.length / 2));
  const isEvenListRef = useRef(items.length % 2);
  const scrollRef = useRef(null);
  const scrollHeightRef = useRef(
    isEvenListRef.current ? itemHeight * itemsToShow - itemHeight : itemHeight * itemsToShow
  );

  const { container, list, scrollView, listText } = styles;

  useEffect(() => {
    setTimeout(() => {
      if (scrollHeightRef.current !== 0) {
        console.log({
          y: currentIndexRef.current * itemHeight - itemHeight + itemHeight,
          isEvenListRef: isEvenListRef.current,
          currentIndexRef: items[currentIndexRef.current],
        });

        scrollRef?.current?.scrollTo({
          x: 0,
          y: currentIndexRef.current * itemHeight - itemHeight + itemHeight,
          animated: true,
        });
        onChange(items[currentIndexRef.current]);
      }
    }, 300);
  }, [scrollHeightRef.current, items]);

  return (
    <View style={container}>
      <ScrollView
        ref={scrollRef}
        showsVerticalScrollIndicator={false}
        snapToInterval={itemHeight}
        bounces={false}
        scrollEventThrottle={16}
        decelerationRate="fast"
        onMomentumScrollEnd={(e) => {
          const currentIndex = parseInt(e.nativeEvent.contentOffset.y / itemHeight);

          currentIndexRef.current = currentIndex;
          setItemIndex(items[currentIndex]);
          onChange(items[currentIndex]);
        }}
        onScroll={(e) => {
          const offset = parseInt(e.nativeEvent.contentOffset.y);
          const index = parseInt(offset / itemHeight);
          const mean = offset > 99 ? parseInt(`${offset}`.substring(1)) : parseInt(`${offset}`);

          if (!(mean > 30 && mean <= 50)) {
            if (mean >= 0 && mean <= 30) {
              currentIndexRef.current = index;
              setItemIndex(items[index]);
            } else {
              currentIndexRef.current = index + 1;
              setItemIndex(items[index + 1]);
            }
          } else {
            if (index !== currentIndexRef.current) {
              currentIndexRef.current = index;
              setItemIndex(items[index]);
            }
          }
        }}
        contentContainerStyle={scrollView}
      >
        {items.map((item, index) => (
          <View style={list} key={index}>
            <Text style={listText(itemIndex, item)}>{item}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    paddingTop: height / 6 - itemHeight / 6,
    paddingBottom: height / 3.35 - itemHeight / 3.35,
    paddingHorizontal: 20,
  },
  list: {
    height: itemHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listText: (itemIndex, item) => {
    return { fontSize: itemIndex === item ? 58 : 43, color: '#909cc6', fontWeight: '500' };
  },
});
