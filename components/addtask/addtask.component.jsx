import { Dimensions, FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { TaskItem } from '../task-item/task-item.component';

const { width, height } = Dimensions.get('window');

export const AddTask = ({ setModal, modal, tasks }) => {
  const { container, image, text, button, btnImage, imageContainer } = styles;

  return (
    <View style={container}>
      {tasks.length > 0 ? (
        <View style={{}}>
          <FlatList
            data={tasks}
            renderItem={({ item }) => <TaskItem item={item} />}
            showsVerticalScrollIndicator={false}
          />
        </View>
      ) : (
        <Pressable onPress={() => setModal(!modal)}>
          <View style={imageContainer}>
            <Image
              source={require('../../assets/bg-image.png')}
              style={image}
              resizeMode={'contain'}
            />
          </View>
          <Text style={text}>Click to add tasks</Text>
        </Pressable>
      )}
      <Pressable onPress={() => setModal(!modal)} style={button}>
        <Image source={require('../../assets/addtask-icon.png')} style={btnImage} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 50,
  },
  imageContainer: { width: 300, height: 300 },
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
    alignItems: 'center',
    padding: 10,
    marginTop: 20,
    position: 'absolute',
    bottom: -350,
    height: '100%',
  },
  btnImage: {
    width: 100,
    height: 100,
  },
});
