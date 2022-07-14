import { Dimensions, Image, Pressable, StyleSheet } from 'react-native';

const { height } = Dimensions.get('window');

export const AddTaskButton = ({ setModal, modal }) => {
  const { button, image } = styles;
  return (
    <Pressable onPress={() => setModal(!modal)} style={button}>
      <Image source={require('../../assets/addtask-icon.png')} style={image} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    height: height / 8,
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
});
