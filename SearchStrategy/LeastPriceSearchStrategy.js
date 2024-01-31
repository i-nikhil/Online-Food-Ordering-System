const NoResturantFoundError = require("../Errors/NoResturantFoundError");
const SearchStrategy = require("./SearchStrategy");

class LeastPriceSearchStrategy extends SearchStrategy {
    search(resturants, item) {
        let sortedPrices = []

        for (const resturant of resturants) {

            if (resturant.menu.has(item)) {
                sortedPrices.push([resturant.name, resturant.menu.get(item)])
            }
        }

        if (sortedPrices.length == 0) throw new NoResturantFoundError(`None of the resturants serves ${item}`)

        sortedPrices.sort((a, b) => a[1] - b[1]);

        return sortedPrices
    }
}

module.exports = LeastPriceSearchStrategy