import { View } from 'react-native'
import Svg, { Path } from 'react-native-svg'

const HorizontalLine = () => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Svg
        width='260'
        height='1'
        viewBox='0 0 448 1'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <Path d='M0.5 0.5H447.5' stroke='#707070' strokeOpacity='0.19' />
      </Svg>
    </View>
  )
}

export default HorizontalLine
