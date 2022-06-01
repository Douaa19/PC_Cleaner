const { app, BrowserWindow, Menu } = require("electron");

require("@electron/remote/main").initialize();
const { MainMenu } = require("../src/menu/MainMenu");

const createWindow = () => {
  // new MainMenu();
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

  // const childWin = new BrowserWindow({
  //   width: 500,
  //   height: 500,
  //   parent: win,
  //   show: false,
  //   frame: true,
  // });

  win.loadURL("http://localhost:3000");
  // childWin.loadFile("../src/components/authentication/Login.js");

  const template = [
    {
      label: "File",
    },
    {
      label: "About",
    },
    {
      label: "Sign-in",
    },
    {
      label: "Sign-up",
    },
    {
      label: "Quit",
    },
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);

  // Open the DevTools
  // win.webContents.openDevTools();
  // childWin.once("ready-to-show", () => {
  //   childWin.show();
  // });
};

app.on("ready", createWindow);

// Quit when all windows are closed
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
