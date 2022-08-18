import { StyleSheet, Text, View } from 'react-native';
import Modal from 'react-native-modal';

export const CustomModal = ({ children, ...modalProps }) => {
  return (
    <Modal {...modalProps} style={styles.container}>
      {children}
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
