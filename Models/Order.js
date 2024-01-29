class Order
{
    #resturantName
    orders
    #bill
    constructor(name)
    {
        this.#resturantName = name
        this.orders = new Map()
    }
    get resturantName()
    {
        return this.#resturantName
    }
    set bill(amount)
    {
        this.#bill = amount
    }
    get bill()
    {
        return this.#bill
    }
}

module.exports = Order