class MainMenu {
    cunstructor() {
        const {Menu} = require("electron")
        let template = [
            {
                label: "Sign-in"
            },
            {
                label: "Sign-up",
            },
        ]
        let menu = Menu.buildFromTemplate(template);
        Menu.setApplicationMenu(Menu)
    }
}

module.exports = {MainMenu}