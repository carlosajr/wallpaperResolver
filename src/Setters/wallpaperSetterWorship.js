const wallpaperPathResolver = require('../Resolvers/pathResolver');
const comandLineService = require('../Services/comandLineService');

async function set() {
  const pathWallpaper = wallpaperPathResolver.resolve();
  const file = wallpaperPathResolver.resolveFile();

  const completePath = `${pathWallpaper}\\${file}.jpg`

  await comandLineService.setWallpaper(completePath);
}

module.exports = { set }