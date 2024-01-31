const MaximumOrderSearchStrategy = require("../SearchStrategy/MaximumOrdersSearchStrategy");
const CommandExecutor = require("./CommandExecutor");

class ListResturantByMaximumOrderHistoryCommandExecutor extends CommandExecutor {
    static commandName = 'popular-search'//popular-search coke

    validate(command) {
        return !(command.length != 2 || command[0] != ListResturantByMaximumOrderHistoryCommandExecutor.commandName);
    }

    execute(command) {
        const sortedOrderCounts = this.service.searchItem(command[1], new MaximumOrderSearchStrategy())

        console.log(`\nFound ${sortedOrderCounts.length} resturants serving ${command[1]}:`);
        for (let orderCount of sortedOrderCounts) {
            const dotsCount = 30 - orderCount[0].length - orderCount[1].toString().length;
            const dots = '.'.repeat(Math.max(0, dotsCount));
            console.log(`${orderCount[0]}${dots}${orderCount[1]} times ordered`);
        }
    }
}

module.exports = ListResturantByMaximumOrderHistoryCommandExecutor