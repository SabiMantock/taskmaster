import { useState } from 'react';
import { Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { HOURS, MINUTES } from '../../data';

import TimePicker from '../time-picker/time-picker.component';

import { InputForm } from '../input-form/input-form.component';

import Modal from 'react-native-modal';

import { TaskButtons } from '../task-buttons/task-buttons.component';

const { width, height } = Dimensions.get('window');

const CreateTaskModal = ({ modal, setModal, addTask }) => {
  const { container, modalContainer, modalText } = styles;
  const [note, setNote] = useState(false);
  const [scroller, setScroller] = useState(false);
  const [hour, setHour] = useState('00');
  const [mins, setMins] = useState('00');
  const [hoursIndex, setHoursIndex] = useState(0);
  const [minsIndex, setMinsIndex] = useState(0);
  const [title, setTitle] = useState('');
  const [noteText, setNoteText] = useState('');

  const onChange = (val) => console.warn(val);

  const handleHoursChange = (val) => {
    setHoursIndex(val);

    onChange({
      hour: val,
      min: minsIndex,
    });
  };

  const handleMinsChange = (val) => {
    setMinsIndex(val);

    onChange({
      hour: hoursIndex,
      min: val,
    });
  };

  const setDuration = () => {
    setHour(hoursIndex);
    setMins(minsIndex);

    setScroller(false);
  };

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
        <InputForm
          note={note}
          onOpen={onOpen}
          hour={hour}
          mins={mins}
          scroller={scroller}
          setScroller={setScroller}
          setNoteText={setNoteText}
          setTitle={setTitle}
        />
        <TimePicker
          scroller={scroller}
          setScroller={setScroller}
          handleHoursChange={handleHoursChange}
          handleMinsChange={handleMinsChange}
          setDuration={setDuration}
        />
      </View>
      <TaskButtons
        hour={hour}
        mins={mins}
        title={title}
        noteText={noteText}
        addTask={addTask}
        setNote={setNote}
        setModal={setModal}
        setNoteText={setNoteText}
        setTitle={setTitle}
        setHour={setHour}
        setMins={setMins}
      />
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
    height: height / 1.9,
    marginBottom: 10,
    position: 'absolute',
    zIndex: 1,
    bottom: 70,
    borderRadius: 40,
  },
  modalText: {
    textTransform: 'uppercase',
    marginLeft: 5,
    marginBottom: 26,
    fontSize: 16,
    color: '#01D9F7',
  },
});

export default CreateTaskModal;
