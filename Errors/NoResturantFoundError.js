class NoResturantFoundError extends Error {
    constructor(message) {
        super(message);
        this.name = 'NoResturantFoundError'
    }
}

module.exports = NoResturantFoundError
