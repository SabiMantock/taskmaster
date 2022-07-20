import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { newDateArray } from '../../utils/range';
import DateCard from '../date-card/date-card.component';

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
          marginHorizontal: 10,
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
    marginHorizontal: 15,
  },
  dateCardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
