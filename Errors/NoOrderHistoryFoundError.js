class NoOrderHistoryFound extends Error {
    constructor(message) {
        super(message)
        this.name = 'NoOrderHistoryFound'
    }
}

module.exports = NoOrderHistoryFound