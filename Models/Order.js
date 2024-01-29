class Order
{
    #resturantName
    orders
    constructor(name)
    {
        this.#resturantName = name
        this.orders = new Map()
    }
    get resturantName()
    {
        return this.#resturantName
    }    
}

module.exports = Order