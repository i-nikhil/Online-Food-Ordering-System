class ResturantService
{
    #resturants
    constructor()
    {
        this.#resturants = new Map();
    }
    onboardNewResturant(resturant)
    {
        this.#resturants.set(resturant.name, resturant)
    }
    placeOrder(order)
    {
        let resturant = this.#resturants.get(order.resturantName)

        if(!resturant) throw Error('Resturant not found')

        let price = 0;

        if(parseInt(resturant.orderInProcess) >= parseInt(resturant.capacity))
        throw Error('Resturant reached its max order capacity')

        for (let key of order.orders.keys())
        {
            if(resturant.menu.has(key))
            {
                //price+ = (item price)* (no. of items)
                price += (parseInt(resturant.menu.get(key))*parseInt(order.orders.get(key)))
            }
        }

        if(price == 0)
        throw Error(`No matching item found in ${resturant.name}'s menu`)

        resturant.saveOrderHistory(order)
        resturant.orderInProcess+=1;
        return price;
    }
}

module.exports = ResturantService