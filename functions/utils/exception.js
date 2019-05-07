class ValidationError extends Error {
  constructor(httpStatus, ...params) {
    super(...params)
    this.name = 'ValidationError'
    this.httpStatus = httpStatus
  }
}

module.exports = ValidationError