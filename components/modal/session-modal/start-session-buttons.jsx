import { Pressable, StyleSheet, Text, View } from 'react-native';

export const StartSessionButtons = () => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.delBtn}>
        <Text style={styles.delBtnTxt}>Cancel</Text>
      </Pressable>
      <Pressable style={styles.addBtn}>
        <Text style={styles.addBtnTxt}> Start Session</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    height: 150,
    backgroundColor: '#01D9F7',
    position: 'absolute',
    bottom: -35,
    width: '100%',
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
