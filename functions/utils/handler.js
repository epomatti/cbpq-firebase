const db = require('./firestore').db

handleError = (err, req, res, next) => {
  if (err.httpStatus) {
    res.status(err.httpStatus).send(err.message)
  } else {
    log(err)
    res.status(500).send('Falha inesperada')
  }
}

log = (err) => {
  var docRef = db.collection('errors').doc();
  docRef.set({
    message: err.message,
    stack: err.stack,
    date: Date.now()
  });
}

module.exports = { handleError }