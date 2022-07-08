import { Dimensions, StyleSheet, Text, View } from 'react-native'
import CustomText from '../text/text.component'
import VerticalLine from '../vertical-line/vertical-line.component'

const { width, height } = Dimensions.get('window')

const DateCard = ({ dates }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <CustomText style={styles.day} text={dates.day} />
        <CustomText style={styles.month} text={dates.month} />
        <VerticalLine />
        <CustomText style={styles.weekday} text={dates.weekday} />
      </View>
    </View>
  )
}

export default DateCard

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
    marginHorizontal: 5
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  day: {
    fontSize: 25,
    fontWeight: '400'
  },
  month: {
    fontSize: 16,
    textTransform: 'uppercase',
    fontWeight: '400',
    lineHeight: 27
  },
  weekday: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 27
  }
})
