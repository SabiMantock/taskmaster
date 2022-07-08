import { Dimensions, TextInput } from 'react-native'

const { width, height } = Dimensions.get('window')

const Input = ({ ...otherProps }) => {
  return (
    <>
      <TextInput {...otherProps} />
    </>
  )
}

export default Input
