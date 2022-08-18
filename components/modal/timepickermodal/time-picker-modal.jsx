import React, { useEffect, useRef, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { DotIcon } from '../../../assets/dot-icon';
import { Line } from '../../../assets/line';
import { CustomModal } from '../custom-modal';
import { DoubleScroller } from './double-scroller';

const TimePickerModal = ({}) => {
  return (
    <CustomModal
      isVisible={true}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      backDropOpacity={0.6}
      animationInTiming={500}
      animationOutTiming={500}
    >
      <View style={styles.modalContainer}>
        <View style={styles.container}>
          <Text style={styles.task}>create task</Text>
          <View style={styles.image}>
            <DotIcon width={'6'} height={'6'} fill={'#909CC6'} />
          </View>
          <Text style={styles.duration}>select duration</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>HH</Text>
          <Text style={styles.text}>MM</Text>
        </View>
        <Line width={'254'} strokeOpacity={'0.42'} />
        <DoubleScroller />
        <Pressable>
          <Text style={styles.setDuration}>Set Duration</Text>
        </Pressable>
      </View>
    </CustomModal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: '#fff',
    borderRadius: 30,
    marginVertical: 50,
    flex: 1,
    alignItems: 'center',
    padding: 30,
    width: '100%',
  },
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
  textContainer: {
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
  setDuration: {
    color: '#01d9f7',
    fontSize: 16,
    textTransform: 'uppercase',
  },
});

export default TimePickerModal;
