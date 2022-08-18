import { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { newDateArray } from '../../utils/utils';
import DateCard from './date-card';

const { height, width } = Dimensions.get('window');

const Calendar = () => {
  const [dates, setDates] = useState([]);

  useEffect(() => {
    setDates(newDateArray);
  }, []);

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 18,
          marginLeft: 10,
          marginVertical: 10,
          color: '#707070',
        }}
      >
        Calendar
      </Text>
      <View style={styles.dateCardContainer}>
        {dates.map((date, index) => (
          <DateCard key={index} dates={date} index={index} />
        ))}
      </View>
    </View>
  );
};

export default Calendar;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  dateCardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
