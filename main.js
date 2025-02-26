const { app, BrowserWindow, screen } = require('electron');

function createWindow() {
  // Get the screen dimensions
  const primaryDisplay = screen.getPrimaryDisplay();
  const { width, height } = primaryDisplay.workAreaSize; // Use the work area (excludes taskbar)

  const win = new BrowserWindow({
    width: 300, // Adjust size as needed
    height: 300,
    x: width - 310, // 300px width + 10px padding from the right
    y: height - 310, // 300px height + 10px padding from the bottom
    frame: false,
    transparent: true,
    resizable: false,
    alwaysOnTop: true,
    skipTaskbar: false,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.loadFile('main.html');
  // Optionally, uncomment the line below to allow clicks to pass through the window.
  // win.setIgnoreMouseEvents(true);
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
