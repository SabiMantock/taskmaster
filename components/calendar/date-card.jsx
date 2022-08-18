import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { VLine } from '../../assets/v-line';

const { width, height } = Dimensions.get('window');

const DateCard = ({ dates: { day, month, weekday }, index }) => {
  const { container, date, mth, wkday } = styles;
  return (
    <View style={container(index)}>
      <Text style={date(index)}>{day}</Text>
      <Text style={mth(index)}>{month}</Text>
      <View style={{ marginVertical: 5 }}>
        {index === 1 ? (
          <VLine height={'27'} stroke={'#FFF'} />
        ) : (
          <VLine height={'27'} stroke={'#707070'} />
        )}
      </View>

      <Text style={wkday(index)}>{weekday}</Text>
    </View>
  );
};

export default DateCard;

const styles = StyleSheet.create({
  container: (index) => {
    return {
      width: 95,
      borderRadius: 20,
      borderWidth: 5,
      height: 160,
      borderColor: index === 1 ? '#01D9F7' : 'rgb(100, 122, 254)',
      backgroundColor: index === 1 ? '#01D9F7' : 'rgb(164, 176, 255)',
      opacity: 0.68,
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 2.9,
    };
  },

  date: (index) => {
    return {
      fontSize: 30,
      color: index === 1 ? '#fff' : '#707070',
    };
  },
  mth: (index) => {
    return {
      fontSize: 18,
      textTransform: 'uppercase',
      color: index === 1 ? '#fff' : '#707070',
    };
  },
  wkday: (index) => {
    return {
      fontSize: 18,
      color: index === 1 ? '#fff' : '#707070',
      textTransform: 'uppercase',
    };
  },
});
