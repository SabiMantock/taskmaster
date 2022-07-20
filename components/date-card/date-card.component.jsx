import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';

const { width, height } = Dimensions.get('window');

const DateCard = ({ dates, index }) => {
  const { container, content, day, month, weekday } = styles;
  return (
    <View style={container(index)}>
      <View style={content}>
        <Text style={day(index)}>{dates.day}</Text>
        <Text style={month(index)}>{dates.month}</Text>

        {index === 1 ? (
          <Image source={require('../../assets/v-line-white.png')} style={{ height: 27 }} />
        ) : (
          <Image source={require('../../assets/v-line.png')} style={{ height: 27 }} />
        )}
        <Text style={weekday(index)}>{dates.weekday}</Text>
      </View>
    </View>
  );
};

export default DateCard;

const styles = StyleSheet.create({
  container: (index) => {
    return {
      flex: 1,
      width: width / 2,
      borderRadius: 25,
      borderWidth: 5,
      height: 150,
      borderColor: index === 1 ? '#01D9F7' : 'rgb(100, 122, 254)',
      backgroundColor: index === 1 ? '#01D9F7' : 'rgb(164, 176, 255)',
      opacity: 0.68,
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 5,
    };
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  day: (index) => {
    return {
      fontSize: 25,
      color: index === 1 ? '#fff' : '#707070',
    };
  },
  month: (index) => {
    return { fontSize: 14, textTransform: 'uppercase', color: index === 1 ? '#fff' : '#707070' };
  },
  weekday: (index) => {
    return { fontSize: 14, color: index === 1 ? '#fff' : '#707070', textTransform: 'uppercase' };
  },
});
