import { useState } from 'react';
import { ScrollView } from 'react-native';
import { CountDownAnimation } from '../../components/animation/countdown-animation';
import Calendar from '../../components/calendar/calendar';
import DateCard from '../../components/calendar/date-card';
import { CountDown } from '../../components/countdown/countdown';
import CreateTaskModal from '../../components/modal/createtaskmodal/create-task-modal';
import { Duration } from '../../components/modal/session-modal/duration-timer';
import { SessionModal } from '../../components/modal/session-modal/session-modal';
import TimePickerModal from '../../components/modal/timepickermodal/time-picker-modal';
import { SessionProgress } from '../../components/session-progress/session-progress';
import { AddTasks } from '../../components/tasks/add-task';
import { TaskItem } from '../../components/tasks/task-item';
import { Tasks } from '../../components/tasks/tasks';
import { data } from '../../data';

export const Glossary = () => {
  const [createTaskModal, setCreateTaskModal] = useState(false);
  const [sessionModal, setSessionModal] = useState(false);
  return (
    <ScrollView>
      <DateCard dates={{ day: '13', month: 'APR', weekday: 'TUE' }} />
      <Calendar />
      <TaskItem item={data} />
      <AddTasks
        createTaskModal={createTaskModal}
        setCreateTaskModal={setCreateTaskModal}
        sessionModal={sessionModal}
        setSessionModal={setSessionModal}
      />
      <CreateTaskModal createTaskModal={createTaskModal} setCreateTaskModal={setCreateTaskModal} />
      {/* <TimePickerModal /> */}
      <SessionModal sessionModal={sessionModal} setSessionModal={setSessionModal} />
      <SessionProgress />
      <Duration />
      <CountDownAnimation />
      <CountDown />
      <Tasks />
    </ScrollView>
  );
};
