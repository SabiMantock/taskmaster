import { FlatList, Pressable, ScrollView, Text, View } from 'react-native';
import { UnCheckedIcon } from '../../../assets/unchecked-icon';
import { data } from '../../../data';
import { theme } from '../../../theme/default';
import { SessionContainer } from './session-container';
import { SessionTaskItem } from './session-task-item';

export const SessionList = () => {
  return (
    <SessionContainer>
      <ScrollView showsVerticalScrollIndicator={false}>
        {data.map((item) => {
          return (
            <View key={item.key} style={{ flexDirection: 'row' }}>
              <SessionTaskItem item={item} />
            </View>
          );
        })}
      </ScrollView>
    </SessionContainer>
  );
};
