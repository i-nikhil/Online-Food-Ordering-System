const NoResturantFoundError = require("../Errors/NoResturantFoundError");
const LeastPriceSearchStrategy = require("../SearchStrategy/LeastPriceSearchStrategy");
const CommandExecutor = require("./CommandExecutor");

class ListResturantByLowestItemPriceCommandExecutor extends CommandExecutor {
    static commandName = 'search'//search coke

    validate(command) {
        return !(command.length != 2 || command[0] != ListResturantByLowestItemPriceCommandExecutor.commandName);
    }

    execute(command) {
        const sortedPrices = this.service.searchItem(command[1], new LeastPriceSearchStrategy())

        console.log(`\nFound ${sortedPrices.length} resturants serving ${command[1]}:`);
        for (let price of sortedPrices) {
            const dotsCount = 30 - price[0].length - price[1].toString().length;
            const dots = '.'.repeat(Math.max(0, dotsCount));
            console.log(`${price[0]}${dots}₹ ${price[1]}/-`);
        }
    }
}

module.exports = ListResturantByLowestItemPriceCommandExecutor