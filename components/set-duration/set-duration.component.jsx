import { StyleSheet, Text, View, Pressable } from 'react-native';

export const SetDurationButton = ({ setDuration }) => {
  const { container, text } = styles;
  return (
    <Pressable onPress={setDuration}>
      <Text style={text}>Set Duration</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#01d9f7',
    fontSize: 16,
    textTransform: 'uppercase',
  },
});
