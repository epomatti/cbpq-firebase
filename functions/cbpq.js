const axios = require('axios')

const client = axios.create({
  baseURL: 'https://www.cbpq.org.br',
})

const getLicenseCbpq = async (cbpq) => {
  return getLicense('cbpq', cbpq)
}

const getLicenseCpf = async (cpf) => {
  return getLicense('cpf', cpf)
}

const getLicense = async (parameter, document) => {
  const response = await client.get(`/site/filiados/consulta-licenca?${parameter}=${document}`)
  const data = await response.data
  return data
}

module.exports = { getLicenseCbpq, getLicenseCpf };