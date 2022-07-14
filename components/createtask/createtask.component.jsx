import { useState } from 'react';
import { Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { HOURS, MINUTES } from '../../data';

import TimePicker from '../time-picker/time-picker.component';
import { TimeItem } from '../time-item/time-item.component';

import { InputForm } from '../input-form/input-form.component';

import Modal from 'react-native-modal';

import { TaskButtons } from '../task-buttons/task-buttons.component';

const { width, height } = Dimensions.get('window');

const CreateTask = ({ modal, setModal }) => {
  const [note, setNote] = useState(false);
  const [scroller, setScroller] = useState(false);
  const [hours, setHours] = useState('00');
  const [mins, setMins] = useState('00');

  const { container, modalContainer, modalText, timeContainer } = styles;

  const onOpen = () => {
    setNote(!note);
  };
  const onClose = () => {
    setModal(false);
    setNote(false);
  };

  return (
    <Modal
      isVisible={modal}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      backDropOpacity={0.6}
      animationInTiming={500}
      animationOutTiming={500}
      onBackdropPress={onClose}
      style={container}
    >
      <View style={modalContainer}>
        <Text style={modalText}>Create task</Text>
        <InputForm note={note} onOpen={onOpen} />
        <TimePicker
          scroller={scroller}
          setScroller={setScroller}
          setHours={setHours}
          setMins={setMins}
        />

        <Pressable
          onPress={() => {
            setScroller(!scroller);
          }}
          style={timeContainer}
        >
          <TimeItem hours={hours} minutes={mins} />
        </Pressable>
      </View>
      <TaskButtons />
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    justifyContent: 'flex-end',
    position: 'relative',
  },

  modalContainer: {
    backgroundColor: '#fff',
    padding: 35,
    width: width,
    height: height / 2,
    marginBottom: 10,
    position: 'absolute',
    zIndex: 1,
    bottom: 80,
    borderRadius: 60,
  },
  modalText: {
    textTransform: 'uppercase',
    marginLeft: 5,
    marginBottom: 26,
    fontSize: 16,
    color: '#01D9F7',
  },
  timeContainer: {
    alignItems: 'center',
    marginTop: 26,
  },
});

export default CreateTask;
