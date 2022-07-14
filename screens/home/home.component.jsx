import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AddTaskButton } from '../../components/addTask/addTask.component';

import { BackgroundImage } from '../../components/bg-image/bg-image.component';

import Calendar from '../../components/calendar/calendar.component';
import CreateTask from '../../components/createtask/createtask.component';

const Home = () => {
  const [modal, setModal] = useState(false);

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
      <BackgroundImage />
      <CreateTask modal={modal} setModal={setModal} />
      <AddTaskButton setModal={setModal} modal={modal} />
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
