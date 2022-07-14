import { forwardRef, useState } from 'react';
import { Dimensions, ScrollView, View, Text, StyleSheet } from 'react-native';
import { HOURS } from '../../data';

const { height } = Dimensions.get('window');

let itemHeight = 100;

const ListItem = ({ item, style }) => (
  <View style={style}>
    <Text style={styles.listText}>{item}</Text>
  </View>
);

export const Scroller = forwardRef(
  ({ items, onChange = (val) => console.log(val), setItemIndex }, ref) => {
    const { container, list, scrollView } = styles;

    return (
      <View style={container}>
        <ScrollView
          ref={ref}
          showsVerticalScrollIndicator={false}
          snapToInterval={itemHeight}
          bounces={false}
          decelerationRate="fast"
          onMomentumScrollEnd={(e) => {
            const currentIndex = Math.round(e.nativeEvent.contentOffset.y / itemHeight);
            setItemIndex(items[currentIndex]);
            // onChange(items[currentIndex]);
          }}
          contentContainerStyle={scrollView}
          // style={{ borderWidth: 1 }}
        >
          {items.map((item, index) => (
            <ListItem key={index} item={item} style={list} />
          ))}
        </ScrollView>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    paddingTop: height / 6 - itemHeight / 6,
    paddingBottom: height / 3.5 - itemHeight / 3.5,
    paddingHorizontal: 20,
  },
  list: {
    height: itemHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listText: { fontSize: 43, color: '#909cc6', fontWeight: '500' },
});
