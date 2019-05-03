const functions = require('firebase-functions')
const express = require('express')

const app = express()

app.get('/licenca', (request, response) => {
  let licenca
  if(request.body.cbpq) {
    licenca = 'cbpq'
  } else if(request.body.cpf) {
    licenca = 'cpf'
  }
  response.send(licenca)
})

exports.app = functions.https.onRequest(app)