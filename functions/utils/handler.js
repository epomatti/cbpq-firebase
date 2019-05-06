const db = require('./firestore').db

handleError = (err, req, res, next) => {
  if (err.httpStatus) {
    res.status(err.httpStatus).send(err.message)
  } else {
    res.status(500).send({ code: 0, message: 'Falha inesperada' })
    log(err)
  }
}

log = (err) => {
  var docRef = db.collection('errors').doc();
  docRef.set({
    date: Date.now(),
    error: err
  });
}

module.exports = { handleError }