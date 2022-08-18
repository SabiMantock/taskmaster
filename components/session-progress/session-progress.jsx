import moment from 'moment';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Pressable, ScrollView, Text, View } from 'react-native';
import { Line } from '../../assets/line';
import { data } from '../../data';
import { sum } from '../../utils/utils';
import { CountDownAnimation } from '../animation/countdown-animation';
import { CountDown } from '../countdown/countdown';

import { SessionContainer } from '../modal/session-modal/session-container';

import { SessionProgressItem } from './session-progress-item';

export const SessionProgress = () => {
  const [selected, setSelected] = useState(false);
  const [timeData, setTimeData] = useState([]);
  const hours = sum(data);
  const startTime = moment().format('hh.mm');
  const endTime = moment()
    .add(hours, 'hours')
    .format('hh.mm ');

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@storage_Key');
      return jsonValue != null ? setTimeData(JSON.parse(jsonValue)) : null;
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    getData();
    console.warn(timeData);
  }, []);

  return (
    <View style={{ alignItems: 'center' }}>
      <CountDown />
      <View style={{ alignSelf: 'flex-start', marginLeft: 30 }}>
        <Text style={{ fontSize: 18, textTransform: 'uppercase', color: '#909cc6' }}>
          Session in progress
        </Text>
      </View>
      <SessionContainer>
        <View>
          <Text style={{ fontSize: 30, color: '#fff' }}>
            {timeData.startTime} - {timeData.endTime}
          </Text>
          <View style={{ alignItems: 'center', marginTop: 15 }}>
            <Line width={'300'} strokeOpacity={'1'} stroke={'#A4B0FF'} />
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 25 }}>
          {data.map((item) => {
            return (
              <View key={item.key} style={{ flexDirection: 'row' }}>
                <SessionProgressItem item={item} />
              </View>
            );
          })}
        </ScrollView>
      </SessionContainer>
    </View>
  );
};
