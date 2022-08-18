import { Dimensions, Text, View } from 'react-native';
import { CustomModal } from '../custom-modal';
import { Duration } from './duration-timer';
import { SessionList } from './session-list';
import { StartSessionButtons } from './start-session-buttons';

const { height, width } = Dimensions.get('window');

export const SessionModal = ({ sessionModal, setSessionModal }) => {
  return (
    <CustomModal
      isVisible={sessionModal}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      backDropOpacity={0.6}
      animationInTiming={500}
      animationOutTiming={500}
      onBackdropPress={() => setSessionModal(!sessionModal)}
      style={{ marginVertical: 100 }}
    >
      <View
        style={{
          backgroundColor: '#fff',
          padding: 20,
          width: width,
          height: height / 1.2,
          marginBottom: 10,
          zIndex: 1,
          bottom: 70,
          borderRadius: 40,
        }}
      >
        <Text
          style={{
            textTransform: 'uppercase',
            marginLeft: 5,
            marginBottom: 20,
            fontSize: 16,
            color: '#01D9F7',
          }}
        >
          Start Session
        </Text>
        <SessionList />
        <View style={{ alignItems: 'center', marginVertical: 10, marginHorizontal: 5 }}>
          <Duration />
        </View>
      </View>
      <StartSessionButtons />
    </CustomModal>
  );
};
