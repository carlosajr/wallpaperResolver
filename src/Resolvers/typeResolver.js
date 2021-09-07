require('dotenv').config();
const { format } = require('date-fns');

const daysOfWorship = process.env.DAYS_OF_WORSHIP;

function resolve() {
  const isDayOfWorship = checkIsDayOfWorship();
  const isTimeOfWorship = checkIsTimeOfWorship();

  return isDayOfWorship && isTimeOfWorship;
}

function checkIsDayOfWorship() {
  const dayOfWeek = format(new Date(), 'EEEE');

  return daysOfWorship.split('|').includes(dayOfWeek);
}

function checkIsTimeOfWorship() {
  const hour = format(new Date(), 'H');

  return hour > process.env.WORSHIP_START_TIME && hour < process.env.WORSHIP_END_TIME;
}

module.exports = { resolve }