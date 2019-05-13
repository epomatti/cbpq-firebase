const functions = require('firebase-functions')
const express = require('express')
const service = require('./services/license')
const handleError = require('./utils/handler').handleError
const cors = require('./utils/cors').cors

const app = express()

// middleware
app.use(cors)

// api
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

// error handler
app.use(handleError)

exports.app = functions.https.onRequest(app)