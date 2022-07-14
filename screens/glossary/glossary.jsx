import { useState } from 'react';
import CreateTask from '../../components/createtask/createtask.component';
import { DoubleScroller } from '../../components/double-scroller/double-scroller.component';
import { ModalTitleText } from '../../components/modal-titleText/modal-titleText.component';
import { Scroller } from '../../components/scroller/scroller.component';
import { SetDurationButton } from '../../components/set-duration/set-duration.component';
import TimePicker from '../../components/time-picker/time-picker.component';
import { TimeText } from '../../components/time-text/time-text.component';
import { HOURS, MINUTES } from '../../data';
import Home from '../home/home.component';

export const Glossary = () => {
  // return <TimePicker />;
  // return <Scroller items={HOURS} />;
  // return <DoubleScroller />;
  // return <ModalTitleText />;
  // return <TimeText />;
  // return <SetDurationButton />;
  // return <CreateTask />;
  return <Home />;
};
