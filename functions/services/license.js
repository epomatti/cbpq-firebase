const api = require('../io/cbpq')
const cleanHtml = require('../utils/cleanHtml.js')
const mapping = require('../utils/mapping.js')
const ValidationError = require('../utils/exception')

const getLicenseCbpq = (cbpq) => {
  return api.getLicenseCbpq(cbpq)
    .then(html => process(html, cbpq))
}

const getLicenseCpf = (cpf) => {
  return api.getLicenseCpf(cpf)
    .then(html => process(html, cpf))
}

const process = (html, document) => {
  try {
    const cleanDom = cleanHtml.clear(html)
    return mapping.toJson(cleanDom)
  } catch (error) {
    if (error instanceof ValidationError) {
      throw error
    } else {
      throw new Error(`Failed to process document ${document}`)
    }
  }
}

module.exports = { getLicenseCbpq, getLicenseCpf }