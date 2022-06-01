class MainMenu {
  cunstructor() {
    const { Menu } = require("electron");
    let template = [
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
        label: "Sign-in",
      },
      {
        label: "Quit",
      },
    ];
    let menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
  }
}

module.exports = { MainMenu };
