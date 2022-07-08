import { View } from 'react-native'
import Svg, { Path } from 'react-native-svg'

const VerticalLine = () => {
  return (
    <View>
      <Svg
        width='2'
        height='27'
        viewBox='0 0 2 27'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <Path d='M1 0V27' stroke='#707070' />
      </Svg>
    </View>
  )
}

export default VerticalLine
