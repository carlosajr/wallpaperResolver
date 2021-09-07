const wallpaperResolver = require('../Resolvers/setterResolver');

async function setWallpaper() {
  const wallpaperSetter = await wallpaperResolver.resolve();

  await wallpaperSetter.set();
}

module.exports = { setWallpaper }