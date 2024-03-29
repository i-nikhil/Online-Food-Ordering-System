const MaxCapacityReachedError = require("../Errors/MaxCapacityReachedError");
const NoDishFoundError = require("../Errors/NoDishFoundError");
const NoOrderHistoryFound = require("../Errors/NoOrderHistoryFoundError");
const NoResturantFoundError = require("../Errors/NoResturantFoundError");

class ResturantService {
    #resturants
    constructor() {
        this.#resturants = new Map();
    }
    onboardNewResturant(resturant) {
        this.#resturants.set(resturant.name, resturant)
    }
    updateResturantMenu(updatedResturant) {
        if (!this.#resturants.has(updatedResturant.name)) throw new NoResturantFoundError('Resturant not found')

        let existingResturant = this.#resturants.get(updatedResturant.name)
        existingResturant.setCapacity(updatedResturant.capacity).setMenu(updatedResturant.menu)

        this.#resturants.set(updatedResturant.name, existingResturant)
    }
    placeOrder(order) {
        let resturant = this.#resturants.get(order.resturantName)

        if (!resturant) throw new NoResturantFoundError('Resturant not found')

        let price = 0;

        if (parseInt(resturant.orderInProcess) >= parseInt(resturant.capacity))
            throw new MaxCapacityReachedError('Resturant reached its maximum order capacity')

        for (let key of order.orders.keys()) {
            if (resturant.menu.has(key)) {
                //price+ = (item price)* (no. of items)
                price += (parseInt(resturant.menu.get(key)) * parseInt(order.orders.get(key)))
            }
        }

        if (price == 0)
            throw new NoDishFoundError(`No matching item found in ${resturant.name}'s menu`)

        order.bill = price
        resturant.saveOrderHistory(order)
        resturant.orderInProcess += 1;
        return price;
    }
    getAllOrderHistory() {
        let history = []
        for (let [, restaurant] of this.#resturants) {
            history.push(...restaurant.orderHistory);
        }

        if (history.length == 0)
            throw new NoOrderHistoryFound(`No order history found`)

        return history
    }
    getOrderHistoryByResturant(resturantName) {
        let resturant = this.#resturants.get(resturantName)

        if (!resturant) throw new NoResturantFoundError('Resturant not found')

        let orderHistory = [...resturant.orderHistory]

        if (orderHistory.length == 0)
            throw new NoOrderHistoryFound(`No order history found`)

        return orderHistory
    }
    getAllResturants() {
        if (this.#resturants.size == 0) throw new NoResturantFoundError('No resturants onboarded yet')
        return Array.from(this.#resturants.values())
    }
    searchItem(item, searchStrategy) {
        return searchStrategy.search(this.getAllResturants(), item)
    }
}

module.exports = ResturantService