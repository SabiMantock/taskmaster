import React from 'react'
import { Dimensions, Image, View } from 'react-native'
import { HOURS, MINUTES } from '../../data'
import CustomModal from '../modal/modal.component'
import Scroller from '../scroller/scroller.component'

const { width, height } = Dimensions.get('window')

const DurationPicker = ({ scroller, setScroller }) => {
  return (
    <CustomModal
      isVisible={scroller}
      onBackdropPress={() => setScroller(false)}
      animationIn='slideInUp'
      animationOut='slideOutDown'
      backDropOpacity={0.6}
      animationInTiming={500}
      animationOutTiming={500}
      style={{ margin: 0 }}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          backgroundColor: '#fff',
          height: height,
          marginTop: height / 4,
          borderRadius: 40
        }}
      >
        <Scroller lists={HOURS} />
        <Image
          source={require('../../assets/dot.png')}
          style={{
            width: 12,
            height: 12,
            position: 'absolute',
            top: height / 2
          }}
        />
        <Scroller lists={MINUTES} />
        <View
          pointerEvents='none'
          style={{
            position: 'absolute',
            borderWidth: 1,
            width: 250,
            height: 100,
            top: height / 2
          }}
        />
      </View>
    </CustomModal>
  )
}

export default DurationPicker
