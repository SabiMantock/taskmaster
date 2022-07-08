import React from 'react'
import { Text } from 'react-native'

const CustomText = ({ text, ...otherProps }) => {
  return <Text {...otherProps}>{text}</Text>
}

export default CustomText
