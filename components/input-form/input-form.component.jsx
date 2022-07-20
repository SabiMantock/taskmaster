import { useState } from 'react';
import { Dimensions, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { TimeItem } from '../time-item/time-item.component';

const { width, height } = Dimensions.get('window');

export const InputForm = ({
  onOpen,
  note,
  hour,
  mins,
  setScroller,
  scroller,
  setNoteText,
  setTitle,
}) => {
  const { inputContainer, textInput, image, buttonText, button, timeContainer } = styles;

  return (
    <View style={inputContainer(note)}>
      <TextInput placeholder="Title" style={textInput} onChangeText={(val) => setTitle(val)} />
      {note ? (
        <View style={{ alignItems: 'center' }}>
          <Image source={require('../../assets/input-line.png')} style={image} />
          <TextInput
            placeholder="Enter note..."
            style={textInput}
            onChangeText={(val) => setNoteText(val)}
          />
        </View>
      ) : (
        <Pressable onPress={onOpen} style={button}>
          <Text style={buttonText}>+</Text>
          <Text style={buttonText}>Add note</Text>
        </Pressable>
      )}
      <Pressable
        onPress={() => {
          setScroller(!scroller);
        }}
        style={timeContainer}
      >
        <TimeItem hour={hour} mins={mins} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: (note) => {
    return {
      backgroundColor: note ? '#FAFBFE' : null,
      borderRadius: 30,
      width: width / 1.2,
    };
  },
  textInput: {
    width: width / 1.2,
    height: height / 10,
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
