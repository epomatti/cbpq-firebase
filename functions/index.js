const functions = require('firebase-functions')
const express = require('express')
const service = require('./services/license')

const app = express()

app.get('/license/cbpq/:cbpq', (req, res, next) => {
  service.getLicenseCbpq(req.params.cbpq)
    .then(data => res.send(data))
    .catch(next)
})

app.get('/license/cpf/:cpf', (req, res, next) => {
  service.getLicenseCpf(req.params.cpf)
    .then(data => res.send(data))
    .catch(next)
})

app.use(function (err, req, res, next) {
  if (err.httpStatus) {
    res.status(err.httpStatus).send(err.message)
  } else {
    console.error(err)
    res.status(500).send({ code: 0, message: 'Falha inesperada' })
  }
})

exports.app = functions.https.onRequest(app)