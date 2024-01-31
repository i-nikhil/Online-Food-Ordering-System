const InvalidCommandError = require("../Errors/InvalidCommandError");
const GetOrderHistoryCommandExecutor = require("./GetOrderHistoryCommandExecutor");
const ListResturantByLowestItemPriceCommandExecutor = require("./ListResturantByLowestItemPriceCommandExecutor");
const ListResturantByMaximumOrderHistoryCommandExecutor = require("./ListResturantByMaximumOrderHistoryCommandExecutor");
const OnboardResturantCommandExecutor = require("./OnboardResturantCommandExecutor");
const OrderFoodCommandExecutor = require("./OrderFoodCommandExecutor");
const ShowMenuCommandExecutor = require("./ShowMenuCommandExecutor");
const UpdateResturantMenuCommandExecutor = require("./UpdateResturantMenuCommandExecutor");

class CommandExecutorFactory {
    #commands = new Map();
    constructor(resturantService) {
        this.#commands.set(OnboardResturantCommandExecutor.commandName, new OnboardResturantCommandExecutor(resturantService))
        this.#commands.set(OrderFoodCommandExecutor.commandName, new OrderFoodCommandExecutor(resturantService))
        this.#commands.set(GetOrderHistoryCommandExecutor.commandName, new GetOrderHistoryCommandExecutor(resturantService))
        this.#commands.set(ShowMenuCommandExecutor.commandName, new ShowMenuCommandExecutor(resturantService))
        this.#commands.set(UpdateResturantMenuCommandExecutor.commandName, new UpdateResturantMenuCommandExecutor(resturantService))
        this.#commands.set(ListResturantByLowestItemPriceCommandExecutor.commandName, new ListResturantByLowestItemPriceCommandExecutor(resturantService))
        this.#commands.set(ListResturantByMaximumOrderHistoryCommandExecutor.commandName, new ListResturantByMaximumOrderHistoryCommandExecutor(resturantService))
    }
    getCommandExecutor(command) {
        if (!this.#commands.has(command)) throw new InvalidCommandError('Invalid Command');
        return this.#commands.get(command);
    }

}

module.exports = CommandExecutorFactory