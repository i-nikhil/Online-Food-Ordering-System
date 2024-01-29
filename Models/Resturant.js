const History = require("./History")

class Resturant
{
    #name
    #capacity
    orderInProcess
    #menu
    #orderHistory

    constructor()
    {
        this.#orderHistory = []
        this.orderInProcess = 0
    }
    setName(name) //builder design pattern
    {
        this.#name = name
        return this
    }
    get name()
    {
        return this.#name
    }
    setCapacity(capacity)
    {
        this.#capacity = capacity
        return this
    }
    get capacity()
    {
        return this.#capacity
    }
    setMenu(menu)
    {
        this.#menu = menu
        return this
    }
    get menu()
    {
        return this.#menu
    }
    saveOrderHistory(order)
    {
        this.#orderHistory.push(new History(order, new Date()))
    }
    get orderHistory()
    {
        return this.#orderHistory
    }
}

module.exports = Resturant