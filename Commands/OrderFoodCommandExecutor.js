const Order = require("../Models/Order");
const CommandExecutor = require("./CommandExecutor");

class OrderFoodCommandExecutor extends CommandExecutor
{
    static commandName = 'order-food'//order-food KFC item1 3 item1 2

    validate(command)
    {
        return !(command.length < 4 || command[0]!= OrderFoodCommandExecutor.commandName);
    }

    execute(command)
    {
        let order = new Order(command[1])
        for(let i=2; i<command.length-1;i+=2)
        {
            order.orders.set(command[i], command[i+1])
        }
        const bill = this.service.placeOrder(order);
        console.log(`Congrats! Order placed from  ${order.resturantName}, bill payable: Rs.${bill}/-`);
    }
}

module.exports = OrderFoodCommandExecutor