const Resturant = require("../Models/Resturant");
const CommandExecutor = require("./CommandExecutor");

class UpdateResturantMenuCommandExecutor extends CommandExecutor {
    static commandName = 'update-resturant'//update-resturant KFC 4 item1 20 item2 39 item3 40 

    validate(command) {
        return !(command.length < 5 || command[0] != UpdateResturantMenuCommandExecutor.commandName);
    }

    execute(command) {
        let resturant = new Resturant().setName(command[1]).setCapacity(command[2]);
        let menu = new Map();
        for (let i = 3; i < command.length - 1; i += 2) {
            menu.set(command[i], parseInt(command[i + 1]))
        }
        resturant.setMenu(menu)
        this.service.updateResturantMenu(resturant);
        console.log(`${resturant.name}'s menu updated successfully`);
    }
}

module.exports = UpdateResturantMenuCommandExecutor