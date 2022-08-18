import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';
import { data } from '../../data';
import { TaskItem } from './task-item';

export const Tasks = () => {
  const [taskData, setTaskData] = useState(data);

  return (
    <View style={{ alignItems: 'center', marginVertical: 100 }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 25,
          width: 400,
        }}
      >
        <Text>Todo</Text>
        <Pressable>
          <Text style={{ color: '#01d9f7', fontSize: 20 }}>Select</Text>
        </Pressable>
      </View>
      <DraggableFlatList
        data={taskData}
        keyExtractor={(item) => item.key}
        renderItem={TaskItem}
        onDragEnd={({ data }) => setTaskData(data)}
        style={{ marginVertical: 20 }}
      />
    </View>
  );
};
