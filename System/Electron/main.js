const {BrowserWindow} = require('electron').remote let
 top_bar = new BrowserWindow({width: 800, height: 600, frame:false, transparent:true})
 top_bar.on('closed', () => { top_bar = null })
  win.loadURL('http://localhost/Reviaco-OS/System/UI/top_bar')