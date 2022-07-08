import Modal from 'react-native-modal'

const CustomModal = ({ children, ...otherProps }) => {
  return <Modal {...otherProps}>{children}</Modal>
}

export default CustomModal
