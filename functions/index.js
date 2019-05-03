const functions = require('firebase-functions')
const express = require('express')
const service = require('./services/license')

const app = express()

app.get('/license', (request, response) => {
  service.getLicense(request.body)
    .then(data => response.send(data))
})

exports.app = functions.https.onRequest(app)