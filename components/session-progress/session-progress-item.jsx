import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';

import { theme } from '../../theme/default';
import { RadioItem } from '../radio-item/radio-item';

export const SessionProgressItem = ({ item }) => {
  const { title, note } = item;
  const [selected, setSelected] = useState(false);
  const [toggleTask, setToggleTask] = useState(false);

  return (
    <View style={{ marginBottom: 30 }}>
      <Pressable onPress={() => setToggleTask(!toggleTask)}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Pressable onPress={() => setSelected(!selected)}>
            <RadioItem
              selected={selected}
              unCheckedColor={theme.colors.monoLight}
              checkedColor={theme.colors.checked}
              fill={theme.colors.checked}
            />
          </Pressable>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 30 }}>
            <Text style={{ fontSize: 30, color: '#fff' }}>{title}</Text>
          </View>
        </View>
        {toggleTask && <Text style={{ fontSize: 20, color: '#fff', marginLeft: 50 }}>{note}</Text>}
      </Pressable>
    </View>
  );
};
