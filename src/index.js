
const wallpaperService = require('./Services/wallpaperSevice');

async function start() {
  await wallpaperService.setWallpaper();
}

start();