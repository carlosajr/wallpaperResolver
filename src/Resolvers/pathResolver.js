require('dotenv').config();
const { format } = require('date-fns');

const typeResolver = require('./typeResolver');

function resolve() {
  const isWorship = typeResolver.resolve();

  return isWorship
    ? process.env.WALLPAPER_PATH_DEFAULT
    : process.env.WALLPAPER_PATH_WORSHIP
}

function resolveFile() {
  const dayOfWeek = format(new Date(), 'EEEE');

  switch (dayOfWeek) {
    case 'Sunday':
      return 'cultoCelebracao';
    case 'Tuesday':
      return 'cultoDoutrina';
    case 'Thursday':
      return 'criancaMissionaria';
  }
}

module.exports = { resolve, resolveFile }