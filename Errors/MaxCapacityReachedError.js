class MaxCapacityReachedError extends Error {
    constructor(message) {
        super(message);
        this.name = 'MaxCapacityReachedError'
    }
}

module.exports = MaxCapacityReachedError