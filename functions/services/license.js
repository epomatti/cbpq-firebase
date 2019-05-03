const api = require('../integration/cbpq')
const cleanHtml = require('../utils/cleanHtml.js')

// TODO solve unhandled promises
// error: (node:2280) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 1)
// (node:2280) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.

const getLicense = (documents) => {
  return callGetLicense(documents)
    .then(html => cleanHtml.clear(html))
}

const callGetLicense = (documents) => {
  const { cbpq, cpf } = documents;
  if (cbpq) {
    return api.getLicenseCbpq(cbpq)
  } else if (cpf) {
    return api.getLicenseCpf(cpf)
  }
}

module.exports = { getLicense }