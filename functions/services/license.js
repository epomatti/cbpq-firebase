const api = require('../io/cbpq')
const cleanHtml = require('../utils/cleanHtml.js')
const mapping = require('../utils/mapping.js')

const getLicenseCbpq = (cbpq) => {
  return api.getLicenseCbpq(cbpq)
    .then(html => process(html))
}

const getLicenseCpf = (cpf) => {
  return api.getLicenseCpf(cpf)
    .then(html => process(html))
}

const process = (html) => {
  const tes = cleanHtml.clear(html)
  return mapping.toJson(tes)
}

module.exports = { getLicenseCbpq, getLicenseCpf }