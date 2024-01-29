const prompt = require('prompt-sync')()

const ResturantService = require('./Service/ResturantService');
const CommandExecutorFactory = require('./Commands/CommandExecutorFactory');

const resturantService = new ResturantService();

const factory = new CommandExecutorFactory(resturantService);

// let testcmd = [
//     'onboard-resturant kfc 4 item2 33',
//     'order-food kfc item2 2'
// ]

while (true) {
    try {
        const input = prompt();

        if (input == 'exit') break;

        const command = input.split(' ');
        const executor = factory.getCommandExecutor(command[0]);

        if (!executor.validate(command)) {
            throw Error('Invalid Command')
        }
        executor.execute(command);
    }
    catch (error) {
        console.log(error.message);
    }
}