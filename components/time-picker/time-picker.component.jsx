import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, Image, ScrollView, Text, View } from 'react-native';
import Modal from 'react-native-modal';

import { DoubleScroller } from '../double-scroller/double-scroller.component';
import { ModalTitleText } from '../modal-titleText/modal-titleText.component';
import { TimeText } from '../time-text/time-text.component';
import { SetDurationButton } from '../set-duration/set-duration.component';

const TimePicker = ({ setScroller, scroller, setHours, setMins }) => {
  const [hoursIndex, setHoursIndex] = useState(0);
  const [minsIndex, setMinsIndex] = useState(0);

  const hoursRef = useRef();
  const minsRef = useRef();

  const setDuration = () => {
    setHours(hoursIndex);
    setMins(minsIndex);
    setScroller(!scroller);
  };

  const scrollToHoursIndex = (index) => {
    hoursRef.current?.scrollTo({ x: 0, y: index, animated: false });
  };

  const scrollToMinsIndex = (index) => {
    minsRef.current?.scrollTo({ x: 0, y: index, animated: false });
  };

  useEffect(() => {
    scrollToHoursIndex(hoursIndex);
    scrollToMinsIndex(minsIndex);
  }, []);

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
          hoursRef={hoursRef}
          minsRef={minsRef}
          setHoursIndex={setHoursIndex}
          setMinsIndex={setMinsIndex}
        />
        <SetDurationButton setDuration={setDuration} />
      </View>
    </Modal>
  );
};

export default TimePicker;
