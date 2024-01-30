const CommandExecutor = require("./CommandExecutor");

class ShowMenuCommandExecutor extends CommandExecutor {
    static commandName = 'show-menu'//show-menu

    validate(command) {
        return !(command.length != 1 || command[0] != ShowMenuCommandExecutor.commandName);
    }
    execute(command) {
        for (const resturant of this.service.getAllResturants()) {
            console.log(`\n${resturant.name}'s Menu:`);
            for (let [item, price] of resturant.menu) {
                const dotsCount = 30 - item.length - price.toString().length;
                const dots = '.'.repeat(Math.max(0, dotsCount));
                console.log(`${item}${dots}₹ ${price}/-`);
            }
        }
    }
}

module.exports = ShowMenuCommandExecutor