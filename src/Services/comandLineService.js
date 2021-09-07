const { exec } = require('child_process');

async function setWallpaper(path) {
  const comando = `powershell.exe src/scripts/setWallpaper.ps1 ${path}`;

  exec(comando);
}

module.exports = { setWallpaper }