const prompt = require('prompt-sync')()

const ResturantService = require('./Service/ResturantService');
const CommandExecutorFactory = require('./Commands/CommandExecutorFactory');
const InvalidCommandError = require('./Errors/InvalidCommandError');

const resturantService = new ResturantService();

const factory = new CommandExecutorFactory(resturantService);

// let testcmd = [
//     'onboard-resturant MacD 4 fries 40 coke 50 burger 60 happymeal 200',
//     'onboard-resturant BurgerKing 4 fries 30 coke 45 burger 75',
//     'onboard-resturant CaptainOlive 4 fries 25 coke 90 burger 70 happymeal 140',
//     'onboard-resturant KFC 5 wings 200 burger 150 crushers 70 icecream 70',
//     'show-menu',
//     'order-food MacD burger 3 happymeal 1',
//     'order-food MacD burger 1',
//     'order-food MacD burger 3',
//     'order-food KFC wings 4 crushers 2 burger 1',
//     'order-food CaptainOlive burger 1',
//     'order-food CaptainOlive burger 2',
//     'get-order-history KFC',
//     'get-order-history MacD',
//     'update-resturant KFC 2 bucket 400 wings 200 burger 150 crushers 70',
//     'get-order-history',
//     'get-order-history BurgerKing',
//     'search burger',
//     'popular-search burger',
//     'popular-search fries',
//     'popular-search maggie',
//     'search fries',
//     'search bucket',
//     'search maggie',
//     'exit'
// ]

while (true) {
    try {
        const input = prompt();

        if (input == 'exit') break;

        const command = input.split(' ');
        const executor = factory.getCommandExecutor(command[0]);

        if (!executor.validate(command)) {
            throw new InvalidCommandError('Invalid Command')
        }
        executor.execute(command);
    }
    catch (error) {
        console.log(error.message);
    }
}