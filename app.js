const prompt = require('prompt-sync')()

const ResturantService = require('./Service/ResturantService');
const CommandExecutorFactory = require('./Commands/CommandExecutorFactory');

const resturantService = new ResturantService();

const factory = new CommandExecutorFactory(resturantService);

// let testcmd = [
//     'onboard-resturant MacD 4 fries 40 coke 50 burger 60 happymeal 200',
//     'onboard-resturant KFC 4 wings 200 burger 150 crushers 70 icecream 70',
//     'order-food MacD burger 3 happymeal 1',
//     'order-food KFC wings 4 crushers 2 burger 1',
//     'order-food MacD coke 1',
//     'order-food KFC icecream 1 crushers 1',
//     'get-order-history KFC',
//     'get-order-history MacD',
//     'get-order-history'
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