import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import { AddTask } from '../../components/addtask/addtask.component';

import Calendar from '../../components/calendar/calendar.component';
import CreateTaskModal from '../../components/createtaskmodal/createtaskmodal.component';
import { TaskItem } from '../../components/task-item/task-item.component';

const Home = () => {
  const [modal, setModal] = useState(false);
  const [tasks, setTasks] = useState([]);

  const addTask = (title, note, hour, mins) => {
    setTasks((prevState) => {
      return [
        { key: Math.random().toString(), title: title, note: note, hour: hour, mins: mins },
        ...prevState,
      ];
    });
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 18,
          marginHorizontal: 10,
          marginHorizontal: 25,
          color: '#707070',
        }}
      >
        A clean slate!
      </Text>
      <Text style={{ fontSize: 25, marginHorizontal: 25, color: '#707070' }}>
        Let's find something todo...
      </Text>
      <Calendar />

      <AddTask setModal={setModal} modal={modal} tasks={tasks} />

      <CreateTaskModal modal={modal} setModal={setModal} addTask={addTask} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
  },
});
