import moment from 'moment';

const getRange = (startDate, endDate, type) => {
  let fromDate = moment(startDate);
  let toDate = moment(endDate);
  let diff = toDate.diff(fromDate, type);
  let range = [];
  for (let i = 0; i < diff; i++) {
    range.push(moment(startDate).add(i, type));
  }
  return range;
};

let yesterday = moment().add(-1, 'days');
let thirdDay = moment().add(3, 'days');
let range = getRange(yesterday, thirdDay, 'days');

export const newDateArray = range.map((dateItem) => {
  const day = moment(dateItem).format('D');
  const weekday = moment(dateItem).format('ddd');
  const month = moment(dateItem).format('MMM');
  return { day, weekday, month };
});

export const timeToDecimal = (hour, min) => {
  const hr = Number(hour);
  const mins = Number(min) / 60;

  const value = hr + mins;
  return parseFloat(value.toFixed(2));
};

export const sum = (data) =>
  data.reduce((accumulator, task) => {
    return accumulator + Number(task.time);
  }, 0);
