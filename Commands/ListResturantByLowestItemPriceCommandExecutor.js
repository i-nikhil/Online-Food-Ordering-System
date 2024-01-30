const CommandExecutor = require("./CommandExecutor");

class ListResturantByLowestItemPriceCommandExecutor extends CommandExecutor {
    static commandName = 'search'//search coke

    validate(command) {
        return !(command.length != 2 || command[0] != ListResturantByLowestItemPriceCommandExecutor.commandName);
    }

    execute(command) {
        let sortedPrices = []

        for (const resturant of this.service.getAllResturants()) {

            if (resturant.menu.has(command[1])) {
                sortedPrices.push([resturant.name, resturant.menu.get(command[1])])
            }
        }
        if (sortedPrices.length == 0) throw Error(`None of the resturants serves ${command[1]}`)

        sortedPrices.sort((a, b) => a[1] - b[1]);

        console.log(`\nFound ${sortedPrices.length} resturants serving ${command[1]}:`);
        for (let price of sortedPrices) {
            const dotsCount = 30 - price[0].length - price[1].toString().length;
            const dots = '.'.repeat(Math.max(0, dotsCount));
            console.log(`${price[0]}${dots}₹ ${price[1]}/-`);
        }

    }
}

module.exports = ListResturantByLowestItemPriceCommandExecutor