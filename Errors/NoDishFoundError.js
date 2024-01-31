class NoDishFoundError extends Error {
    constructor(message) {
        super(message);
        this.name = 'NoDishFoundError'
    }
}

module.exports = NoDishFoundError