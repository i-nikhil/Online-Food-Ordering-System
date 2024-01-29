const GetOrderHistoryCommandExecutor = require("./GetOrderHistoryCommandExecutor");
const OnboardResturantCommandExecutor = require("./OnboardResturantCommandExecutor");
const OrderFoodCommandExecutor = require("./OrderFoodCommandExecutor");

class CommandExecutorFactory
{
    #commands = new Map();
    constructor(resturantService)
    {
        this.#commands.set(OnboardResturantCommandExecutor.commandName, new OnboardResturantCommandExecutor(resturantService))
        this.#commands.set(OrderFoodCommandExecutor.commandName, new OrderFoodCommandExecutor(resturantService))
        this.#commands.set(GetOrderHistoryCommandExecutor.commandName, new GetOrderHistoryCommandExecutor(resturantService))
    }
    getCommandExecutor(command)
    {
        if(!this.#commands.has(command)) throw Error('Invalid Command');
        return this.#commands.get(command);
    }

}

module.exports = CommandExecutorFactory