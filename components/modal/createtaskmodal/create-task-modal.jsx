import { useState } from 'react';
import { Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { CustomModal } from '../custom-modal';
import { AddTaskButtons } from './addtaskbuttons';
import { InputForm } from './input-form';

const { width, height } = Dimensions.get('window');

const CreateTaskModal = ({ createTaskModal, setCreateTaskModal }) => {
  return (
    <CustomModal
      isVisible={createTaskModal}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      backDropOpacity={0.6}
      animationInTiming={500}
      animationOutTiming={500}
      onBackdropPress={() => setCreateTaskModal(!createTaskModal)}
    >
      <View style={styles.modalContainer}>
        <Text style={styles.text}>Create Task</Text>
        <InputForm />
      </View>
      <AddTaskButtons />
    </CustomModal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: '#fff',
    padding: 20,
    width: width,
    height: height / 2,
    marginBottom: 10,
    zIndex: 1,
    bottom: 70,
    borderRadius: 40,
  },
  text: {
    textTransform: 'uppercase',
    marginLeft: 5,
    marginBottom: 26,
    fontSize: 16,
    color: '#01D9F7',
  },
});

export default CreateTaskModal;
