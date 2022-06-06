const { app, BrowserWindow, Menu, webContents } = require("electron");

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

  const childWin = new BrowserWindow({
    width: 500,
    height: 500,
    // parent: win,
    show: false,
    frame: true,
  });

  win.loadURL("http://localhost:3000");
  childWin.loadURL("http://github.com");

  const template = [
    {
      label: "File",
      submenu: [
        {
          label: "Open File",
        },
        {
          label: "Open Folder",
        },
      ],
    },
    {
      label: "About",
    },
    {
      label: "Authentication",
      submenu: [
        {
          label: "Sign-up",
        },
        {
          label: "Sign-in",
          click() {
            childWin.open(
              "https://github.com",
              "_blank",
              "top=500,left=200,frame=false,nodeIntegration=no"
            );
          },
        },
      ],
    },
    {
      label: "Developer",
      submenu: [
        {
          label: "Toggle Developer Tools",
          accelerator:
            process.platform === "darwin" ? "Alt+Command+I" : "Ctrl+Shift+I",
          click() {
            win.webContents.toggleDevTools();
          },
        },
      ],
    },
    {
      label: "Quit",
      role: "close",
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
