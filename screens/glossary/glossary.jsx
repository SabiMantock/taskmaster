import { useState } from 'react';
import { View } from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';
import CreateTaskModal from '../../components/createtaskmodal/createtaskmodal.component';
import { DoubleScroller } from '../../components/double-scroller/double-scroller.component';
import { ModalTitleText } from '../../components/modal-titleText/modal-titleText.component';
import { Scroller } from '../../components/scroller/scroller.component';
import { SetDurationButton } from '../../components/set-duration/set-duration.component';
import { TaskItem } from '../../components/task-item/task-item.component';
import TimePicker from '../../components/time-picker/time-picker.component';
import { TimeText } from '../../components/time-text/time-text.component';
import { data, HOURS, MINUTES } from '../../data';
import Home from '../home/home.component';

export const Glossary = () => {
  const [taskData, setTaskData] = useState(data);

  // return <TimePicker />;
  // return <Scroller items={HOURS} />;
  // return <DoubleScroller />;
  // return <ModalTitleText />;
  // return <TimeText />;
  // return <SetDurationButton />;
  // return <CreateTask />;
  // return <Home />;
  return (
    <>
      <DraggableFlatList
        data={taskData}
        keyExtractor={(item) => item.key}
        renderItem={TaskItem}
        onDragEnd={({ data }) => setTaskData(data)}
        style={{ marginVertical: 100 }}
      />
    </>
  );
};
