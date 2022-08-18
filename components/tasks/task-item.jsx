import { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import DraggableFlatList, { ScaleDecorator, RenderItem } from 'react-native-draggable-flatlist';
import { DotIcon } from '../../assets/dot-icon';
import { DragIcon } from '../../assets/drag-icon';
import { data } from '../../data';

export const TaskItem = ({ item, drag, isActive }) => {
  const [toggleTask, setToggleTask] = useState(false);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onLongPress={drag}
      style={{}}
      onPress={() => setToggleTask(!toggleTask)}
    >
      <View
        style={{
          backgroundColor: '#fff',
          justifyContent: 'space-between',
          alignItems: 'center',
          margin: 10,
          width: 360,
          height: toggleTask ? 190 : 80,
          borderRadius: 30,
          paddingHorizontal: 25,
          paddingVertical: 25,
          shadowColor: 'rgba(0,0,0,0.3)',
          shadowOffset: { width: -2, height: 4 },
          // shadowOpacity: 0.2,
          shadowRadius: 4,
          elevation: 5,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            alignSelf: 'center',
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ fontSize: 20, color: '#4c5369' }}>{item.title}</Text>
            {toggleTask && (
              <>
                <View style={{ marginHorizontal: 5 }}>
                  <DotIcon width={'6'} height={'6'} fill={'#909CC6'} />
                </View>
                <Text style={{ fontSize: 20, color: '#d2ddfb' }}>{item.time}</Text>
              </>
            )}
          </View>
          <View>
            <DragIcon />
          </View>
        </View>
        {toggleTask && (
          <View>
            <Text style={{ fontSize: 16, color: '#a0a0a0' }}>{item.note}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

// {
//   `${parseInt(item.hour) + parseFloat(item.mins / 60)}h`;
// }
