import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { theme } from '../../../theme/default';
import { DotIcon } from '../../../assets/dot-icon';
import { RadioItem } from '../../radio-item/radio-item';

export const SessionTaskItem = ({ item }) => {
  const { title, time, note } = item;
  const [selected, setSelected] = useState(false);

  return (
    <View style={{ marginBottom: 30 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <RadioItem
          unCheckedColor={theme.colors.monoLight}
          checkedColor={theme.colors.checked}
          fill={theme.colors.checked}
        />

        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}>
          <Text style={{ color: 'white', fontSize: 18 }}>{title}</Text>
          <View style={{ marginHorizontal: 5 }}>
            <DotIcon width={'6'} height={'6'} />
          </View>
          <Text numberOfLines={2} ellipsizeMode="clip" style={{ color: 'white', fontSize: 18 }}>
            {time}h
          </Text>
        </View>
      </View>
      <Text
        style={{ color: 'white', fontSize: 18, marginLeft: 30 }}
        numberOfLines={2}
        ellipsizeMode={'clip'}
      >
        {note}
      </Text>
    </View>
  );
};
