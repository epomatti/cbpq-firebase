const functions = require('firebase-functions')
const express = require('express')
const service = require('./services/license')

const app = express()

app.get('/license/cbpq/:cbpq', (req, res) => {
  service.getLicenseCbpq(req.params.cbpq)
    .then(data => res.send(data))
    .catch(error => {
      console.error(error)
      res.send({ error: 'ERR001' })
    }
    )
})

app.get('/license/cpf/:cpf', (req, res) => {
  service.getLicenseCpf(req.params.cpf)
    .then(data => res.send(data))
    .catch(error => {
      res.send({ error: 'ERR001' })
    }
    )
})

exports.app = functions.https.onRequest(app)