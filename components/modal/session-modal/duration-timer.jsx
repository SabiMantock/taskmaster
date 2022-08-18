import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Text, View } from 'react-native';
import moment from 'moment';
import { data } from '../../../data';
import { LeftArrowIcon } from '../../../assets/feather-icon';
import { sum, timeToDecimal } from '../../../utils/utils';

export const Duration = () => {
  const [timeData, setTimeData] = useState([]);
  const hours = sum(data);
  const currentTime = moment().format('hh:mm A');
  const endTime = moment()
    .add(hours, 'hours')
    .format('hh:mm A');

  const timeObj = {
    startTime: currentTime,
    endTime: endTime,
  };

  // const storeData = async (value) => {
  //   try {
  //     const jsonValue = JSON.stringify(value);

  //     await AsyncStorage.setItem('@storage_Key', jsonValue);
  //   } catch (e) {
  //     // saving error
  //   }
  // };
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@storage_Key');
      return jsonValue != null ? setTimeData(JSON.parse(jsonValue)) : null;
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    // storeData(timeObj);
    getData();
    console.warn(timeData);
  }, []);

  console.warn(timeToDecimal('01', '30'));
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: 90,
        borderWidth: 2,
        padding: 20,
        alignItems: 'center',
        borderRadius: 20,
        marginTop: 5,
        borderColor: '#909CC6',
      }}
    >
      <View>
        <Text style={{ fontSize: 16, color: ' rgba(0, 0, 0, 0.27)', marginBottom: 5 }}>From</Text>
        <Text style={{ fontSize: 25, color: '#909CC6' }}>{timeData.startTime}</Text>
      </View>
      <View style={{ alignSelf: 'flex-end' }}>
        <LeftArrowIcon width={'11'} height={'16'} />
      </View>
      <View>
        <Text style={{ fontSize: 16, color: ' rgba(0, 0, 0, 0.27)', marginBottom: 5 }}>To</Text>
        <Text style={{ fontSize: 25, color: '#909CC6' }}>{timeData.endTime}</Text>
      </View>
    </View>
  );
};
