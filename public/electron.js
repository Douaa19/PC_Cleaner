const { app, BrowserWindow } = require("electron");

require("@electron/remote/main").initialize();

const createWondow = () => {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    frame: true,
    title: "PC CLEANER",
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
    },
  });

  win.loadURL("http://localhost:3000");

  // Open the DevTools
  win.webContents.openDevTools();
};

app.on("ready", createWondow);

// Quit when all windows are closed
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) createWondow();
});
