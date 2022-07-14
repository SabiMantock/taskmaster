import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';

const { width, height } = Dimensions.get('window');

const DateCard = ({ dates }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.day}>{dates.day}</Text>
        <Text style={styles.month}>{dates.month}</Text>
        <Image source={require('../../assets/v-line.png')} style={{ height: 27 }} />
        <Text style={styles.weekday}>{dates.weekday}</Text>
      </View>
    </View>
  );
};

export default DateCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width / 5,
    borderRadius: 20,
    borderWidth: 5,
    height: 130,
    borderColor: '#647AFE',
    backgroundColor: '#a4b0ff',
    opacity: 0.68,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  day: {
    fontSize: 25,
    fontWeight: '400',
  },
  month: {
    fontSize: 16,
    textTransform: 'uppercase',
    fontWeight: '400',
    lineHeight: 27,
  },
  weekday: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 27,
  },
});
