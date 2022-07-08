import { useState } from 'react'

import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View
} from 'react-native'
import BackgroundImage from '../../components/bg-image/bg-image.component'
import Button from '../../components/button/button.component'
import Calendar from '../../components/calendar/calendar.component'
import CreateTask from '../../components/createtask/createtask.component'
import CustomText from '../../components/text/text.component'
const { width, height } = Dimensions.get('window')

const Home = () => {
  const [modal, setModal] = useState(false)

  return (
    <View style={styles.container}>
      <CustomText
        style={{
          fontSize: 18,
          marginHorizontal: 10,
          marginHorizontal: 25,
          color: '#707070'
        }}
        text={'A clean slate!'}
      />
      <CustomText
        style={{ fontSize: 25, marginHorizontal: 25, color: '#707070' }}
        text={`Let's find something todo...`}
      />
      <Calendar />
      <BackgroundImage />
      <CreateTask modal={modal} setModal={setModal} />
      <Button style={styles.button}>
        <Pressable onPress={() => setModal(!modal)}>
          <Image
            source={require('../../assets/addtask-icon.png')}
            style={styles.image}
          />
        </Pressable>
      </Button>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40
  },

  button: {
    height: height / 8,
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 10
  },
  image: {
    width: 100,
    height: 100
  }
})
