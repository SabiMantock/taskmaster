import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { Line } from '../../../assets/line';
import { TimeItem } from './time-item';

export const InputForm = ({ hour, mins }) => {
  // const [note, setNote] = useState(false);

  // const onOpen = () => {
  //   setNote(!note);
  // };

  const { inputContainer, textInput, image, buttonText, button, timeContainer } = styles;

  return (
    <View style={inputContainer}>
      <TextInput placeholder="Title" style={textInput} />
      <View>
        <View style={{ alignItems: 'center' }}>
          <Line width={'300'} strokeOpacity={'0.19'} />
        </View>
        <TextInput placeholder="Enter note..." style={textInput} />
      </View>
      <Pressable style={button}>
        <Text style={buttonText}>+</Text>
        <Text style={buttonText}>Add note</Text>
      </Pressable>
      <Pressable style={timeContainer}>
        <TimeItem />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#FAFBFE',
    borderRadius: 30,
  },
  textInput: {
    backgroundColor: '#FAFBFE',
    padding: 20,
    borderRadius: 30,
    fontSize: 16,
  },
  image: {
    width: 300,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    textAlign: 'right',
  },
  buttonText: {
    marginTop: 20,
    fontSize: 16,
    textTransform: 'uppercase',
    marginRight: 15,
    color: '#909CC6',
  },
  timeContainer: {
    alignItems: 'center',
    marginTop: 26,
  },
});
