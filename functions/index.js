const functions = require('firebase-functions')
const express = require('express')
const service = require('./services/license')
const handleError = require('./utils/handler').handleError

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

app.use(handleError)

exports.app = functions.https.onRequest(app)