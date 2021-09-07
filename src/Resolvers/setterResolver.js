const typeResolver = require('./typeResolver');

const wallpaperSetterDefault = require('../Setters/wallpaperSetterDefault');
const wallpaperSetterWorship = require('../Setters/wallpaperSetterWorship');

function resolve() {
  const isWorship = typeResolver.resolve();

  return isWorship ? wallpaperSetterWorship : wallpaperSetterDefault;
}


module.exports = { resolve }