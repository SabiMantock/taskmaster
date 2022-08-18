import { useState } from 'react';
import { Dimensions, FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { AddIcon } from '../../assets/add-icon';
import { PlayIcon } from '../../assets/play-icon';

export const AddTasks = ({
  createTaskModal,
  setCreateTaskModal,
  sessionModal,
  setSessionModal,
}) => {
  const { container, image, text, button, imageContainer, play } = styles;

  return (
    <View style={container}>
      <Pressable>
        <View style={imageContainer}>
          <Image
            source={require('../../assets/bg-image.png')}
            style={image}
            resizeMode={'contain'}
          />
        </View>
        <Text style={text}>Click to add tasks</Text>
      </Pressable>
      <Pressable style={button} onPress={() => setCreateTaskModal(!createTaskModal)}>
        <AddIcon width={'100'} height={'100'} />
      </Pressable>
      <Pressable style={play} onPress={() => setSessionModal(!sessionModal)}>
        <PlayIcon width={'100'} height={'100'} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 50,
  },
  imageContainer: { width: 300, height: 250 },
  image: {
    width: '100%',
    height: '100%',
  },
  text: {
    fontSize: 14,
    textTransform: 'uppercase',
    color: '#909CC6',
    textAlign: 'center',
    marginTop: 30,
  },
  button: {
    // alignItems: 'center',
    padding: 10,
    marginTop: 20,
    position: 'absolute',
    bottom: -320,
    height: '100%',
    zIndex: 100,
  },
  play: {
    // alignItems: 'center',
    padding: 10,
    marginTop: 20,
    position: 'absolute',
    bottom: -320,
    height: '100%',
    left: 50,
    zIndex: 100,
  },
});
