import { useState } from 'react'
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View
} from 'react-native'
import { HOURS, MINUTES } from '../../data'

import Button from '../button/button.component'
import DurationPicker from '../duration-picker/duration-picker.component'
import Duration from '../duration/duration.component'
import HorizontalLine from '../horizontal-line/horizontal-line.component'

import Input from '../input/input.component'
import CustomModal from '../modal/modal.component'
import CustomText from '../text/text.component'

const { width, height } = Dimensions.get('window')

const CreateTask = ({ modal, setModal }) => {
  const [note, setNote] = useState(false)
  const [scroller, setScroller] = useState(false)

  const onOpen = () => {
    setNote(!note)
  }
  const onClose = () => {
    setModal(false)
    setNote(false)
  }

  return (
    <View>
      <CustomModal
        isVisible={modal}
        animationIn='slideInUp'
        animationOut='slideOutDown'
        backDropOpacity={0.6}
        animationInTiming={500}
        animationOutTiming={500}
        onBackdropPress={onClose}
        style={styles.customModal}
      >
        <View style={styles.modal}>
          <CustomText
            style={{
              textTransform: 'uppercase',
              marginLeft: 5,
              marginBottom: 26,
              fontSize: 16,
              color: '#01D9F7'
            }}
            text={'Create task'}
          />

          <View style={styles.inputContainer(note)}>
            <Input
              placeholder='Title'
              style={{
                width: width / 1.2,
                height: height / 10,
                backgroundColor: '#FAFBFE',
                padding: 20,
                borderRadius: 30,
                fontSize: 16
              }}
            />
            {note ? (
              <>
                <HorizontalLine />
                <Input
                  placeholder='Enter note...'
                  style={{
                    width: width / 1.2,
                    height: height / 10,
                    backgroundColor: '#FAFBFE',
                    padding: 20,
                    borderRadius: 30,
                    fontSize: 16
                  }}
                />
              </>
            ) : (
              <Button
                onPress={onOpen}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  textAlign: 'right'
                }}
              >
                <Text
                  style={{
                    marginTop: 20,
                    fontSize: 16,
                    textTransform: 'uppercase',
                    marginRight: 15,
                    color: '#909CC6'
                  }}
                >
                  +
                </Text>
                <Text
                  style={{
                    marginTop: 20,
                    fontSize: 16,
                    textTransform: 'uppercase',
                    marginRight: 15,
                    color: '#909CC6'
                  }}
                >
                  Add note
                </Text>
              </Button>
            )}
          </View>
          <Button
            onPress={() => {
              setScroller(!scroller)
            }}
            style={{
              alignItems: 'center',
              marginTop: 26
            }}
          >
            <Duration hours={'03'} minutes={'30'} />
          </Button>
        </View>
        <DurationPicker scroller={scroller} setScroller={setScroller} />
        <View style={styles.buttonContainer}>
          <Button
            style={{ alignSelf: 'flex-end', marginVertical: 35 }}
            onPress={onClose}
          >
            <Text style={styles.deleteText}>Delete</Text>
          </Button>
          <Button style={styles.button}>
            <Text style={styles.addText}>Add task</Text>
          </Button>
        </View>
      </CustomModal>
    </View>
  )
}

const styles = StyleSheet.create({
  customModal: {
    flex: 1,
    margin: 0,
    justifyContent: 'flex-end',
    position: 'relative'
  },

  modal: {
    backgroundColor: '#fff',
    padding: 35,
    width: width,
    height: height / 1.7,
    marginBottom: 10,
    position: 'absolute',
    zIndex: 1,
    bottom: 80,
    borderRadius: 30
  },
  inputContainer: note => {
    return {
      backgroundColor: note ? '#FAFBFE' : null,
      borderRadius: 30,
      width: width / 1.2
    }
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: height / 5,
    alignItems: 'center',
    backgroundColor: '#01D9F7',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  deleteText: {
    color: '#fff',
    fontSize: 16,
    textTransform: 'uppercase'
  },
  addText: {
    color: '#01D9F7',
    alignSelf: 'center',
    fontSize: 16,
    textTransform: 'uppercase'
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 30,
    height: 50,
    width: 200,
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginVertical: 20
  }
})

export default CreateTask
