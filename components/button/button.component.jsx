import { Pressable } from 'react-native'

const Button = ({ children, ...otherProps }) => {
  return <Pressable {...otherProps}>{children}</Pressable>
}

export default Button
