const NoResturantFoundError = require("../Errors/NoResturantFoundError");
const SearchStrategy = require("./SearchStrategy");

class MaximumOrderSearchStrategy extends SearchStrategy {
    search(resturants, item) {
        let sortedOrderCounts = []

        for (const resturant of resturants) {
            if (!resturant.menu.has(item)) continue

            let count = 0
            for (const history of resturant.orderHistory) {
                if (history.order.orders?.has(item)) count++
            }

            sortedOrderCounts.push([resturant.name, count])
        }

        if (sortedOrderCounts.length == 0) throw new NoResturantFoundError(`None of the resturants serves ${item}`)

        sortedOrderCounts.sort((a, b) => b[1] - a[1]);

        return sortedOrderCounts
    }
}

module.exports = MaximumOrderSearchStrategy