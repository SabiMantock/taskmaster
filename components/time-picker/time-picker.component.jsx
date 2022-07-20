import React, { useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import Modal from 'react-native-modal';
import { HOURS, MINUTES } from '../../data';
import { ModalTitleText } from '../modal-titleText/modal-titleText.component';
import { TimeText } from '../time-text/time-text.component';
import { DoubleScroller } from '../double-scroller/double-scroller.component';
import { SetDurationButton } from '../set-duration/set-duration.component';

const TimePicker = ({
  setScroller,
  scroller,
  handleMinsChange,
  handleHoursChange,
  setDuration,
}) => {
  return (
    <Modal
      isVisible={scroller}
      onBackdropPress={() => setScroller(!scroller)}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      backDropOpacity={0.6}
      animationInTiming={500}
      animationOutTiming={500}
      style={{
        margin: 0,
      }}
    >
      <View
        style={{
          backgroundColor: '#fff',
          borderRadius: 60,
          marginVertical: 50,
          flex: 1,
          alignItems: 'center',
          padding: 30,
        }}
      >
        <ModalTitleText />
        <TimeText />
        <DoubleScroller
          hoursChangeHandler={handleHoursChange}
          minsChangeHandler={handleMinsChange}
        />
        <SetDurationButton setDuration={setDuration} />
      </View>
    </Modal>
  );
};

export default TimePicker;
