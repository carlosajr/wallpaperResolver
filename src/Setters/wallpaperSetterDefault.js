require('dotenv').config();
const randomNumber = require('random-number');

const wallpaperPathResolver = require('../Resolvers/pathResolver');
const comandLineService = require('../Services/comandLineService');

async function set() {
  const numberOfWallpaper = getRandomNumberOfWallpaper();
  const pathWallpaper = wallpaperPathResolver.resolve();

  const completePath = `${pathWallpaper}\\${numberOfWallpaper}.jpg`

  await comandLineService.setWallpaper(completePath);
}

function getRandomNumberOfWallpaper() {
  const options = {
    min: process.env.RANGE_WALLPAPER_MIN,
    max: process.env.RANGE_WALLPAPER_MAX,
    integer: true
  }

  return randomNumber(options);
}

module.exports = { set }