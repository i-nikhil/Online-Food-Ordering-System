const CommandExecutor = require("./CommandExecutor");

class GetOrderHistoryCommandExecutor extends CommandExecutor {
    //get-order-history
    //get-order-history KFC
    static commandName = 'get-order-history'

    validate(command) {
        return !(command.length < 1 || command.length > 2 || command[0] != GetOrderHistoryCommandExecutor.commandName);
    }

    execute(command) {
        let orderHistories

        orderHistories = (command.length === 1)
            ? this.service.getAllOrderHistory()
            : this.service.getOrderHistoryByResturant(command[1]);

        for (const h of orderHistories) {
            console.log(`\nResturant Name: ${h.order.resturantName}`);
            console.log('Items: ',[...h.order.orders.entries()].map(([key, value]) => `${key} × ${value}`).join(', '));
            console.log(`Timestamp: ${h.datetime}`);
            console.log(`Bill Paid: ₹ ${h.order.bill}/-`)
        }
    }

}

module.exports = GetOrderHistoryCommandExecutor