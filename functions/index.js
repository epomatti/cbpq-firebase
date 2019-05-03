const functions = require('firebase-functions')
const express = require('express')
const api = require('./cbpq.js')

const app = express()

app.get('/licenca', (request, response) => {
  const { cbpq, cpf } = request.body;
  if (cbpq) {
    api.getLicenseCbpq(cbpq).then(xml => response.send(xml))
  } else if (cpf) {
    api.getLicenseCpf(cpf).then(xml => response.send(xml))
  }
})

exports.app = functions.https.onRequest(app)