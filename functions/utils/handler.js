const db = require('./firestore').db
const ValidationError = require('./exception')

handleError = (err, req, res, next) => {
  if (err instanceof ValidationError) {
    res.status(err.httpStatus).send(err.message)
  } else {
    res.status(500).send('Falha inesperada')
    logAsync(err)
  }
}

logAsync = async (err) => {
  var docRef = db.collection('errors').doc();
  docRef.set({
    message: err.message,
    stack: err.stack,
    date: Date.now()
  });
}

module.exports = { handleError }