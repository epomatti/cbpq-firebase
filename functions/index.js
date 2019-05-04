const functions = require('firebase-functions')
const express = require('express')
const service = require('./services/license')

const app = express()

app.get('/license/cbpq/:cbpq', (req, res) => {
  const document = {
    cbpq: req.params.cbpq
  }
  getLicense(document, res)
})

app.get('/license/cpf/:cpf', (req, res) => {
  const document = {
    cpf: req.params.cpf
  }
  getLicense(document, res)
})

const getLicense = (document, res) => {
  service.getLicense(document)
    .then(data => res.send(data))
    .catch(error => {
      res.send({ error: 'ERR001' })
    }
    )
}

exports.app = functions.https.onRequest(app)