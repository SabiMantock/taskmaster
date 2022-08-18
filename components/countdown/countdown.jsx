import { Text, View } from 'react-native';
import { DotIcon } from '../../assets/dot-icon';
import { CountDownAnimation } from '../animation/countdown-animation';

export const CountDown = () => {
  return (
    <View>
      <CountDownAnimation />
      <View style={{ position: 'absolute', bottom: 50, left: '25%', alignItems: 'center' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ fontSize: 74, color: '#647AFE' }}>03</Text>
          <View style={{ marginHorizontal: 10 }}>
            <DotIcon height={'15'} width={'16'} fill={'#647afe'} />
          </View>
          <Text style={{ fontSize: 74, color: '#647AFE' }}>17</Text>
        </View>
        <Text style={{ fontSize: 16, color: '#647AFE' }}>2/5 complete</Text>
      </View>
    </View>
  );
};
