import { Pressable, StyleSheet, Text, View } from 'react-native';

export const TaskButtons = ({
  addTask,
  hour,
  mins,
  title,
  noteText,
  setModal,
  setNote,
  setTitle,
  setNoteText,
  setMins,
  setHour,
}) => {
  const { buttonContainer, delBtnTxt, addBtnTxt, delBtn, addBtn } = styles;
  return (
    <View style={buttonContainer}>
      <Pressable
        style={delBtn}
        onPress={() => {
          setNote(false);
          setModal(false);
        }}
      >
        <Text style={delBtnTxt}>Delete</Text>
      </Pressable>
      <Pressable
        style={addBtn}
        onPress={() => {
          addTask(title, noteText, hour, mins);
          setTitle('');
          setNoteText('');
          setHour('00');
          setMins('00');
          setNote(false);
          setModal(false);
        }}
      >
        <Text style={addBtnTxt}>Add Task</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: 10,
    height: 140,
    backgroundColor: '#01D9F7',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  delBtn: {
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: 190,
    height: 50,
  },
  delBtnTxt: {
    color: '#fff',
    fontSize: 16,
    textTransform: 'uppercase',
  },
  addBtn: {
    backgroundColor: '#fff',
    borderRadius: 30,
    width: 190,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  addBtnTxt: {
    color: '#01D9F7',
    alignSelf: 'center',
    fontSize: 16,
    textTransform: 'uppercase',
  },
});
