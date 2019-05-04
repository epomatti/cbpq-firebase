const api = require('../integration/cbpq')
const cleanHtml = require('../utils/cleanHtml.js')
var xmldoc = require('xmldoc');
const util = require('util');

const getLicense = (documents) => {
  return callGetLicense(documents)
    .then(html => cleanHtml.clear(html))
    .then(html => mapXmlToJson(html))
}

const callGetLicense = (documents) => {
  const { cbpq, cpf } = documents;
  if (cbpq) {
    return api.getLicenseCbpq(cbpq)
  } else if (cpf) {
    return api.getLicenseCpf(cpf)
  }
}

const mapXmlToJson = (html) => {
  const document = new xmldoc.XmlDocument(html);
  const dataRoot = document.children[11].children[1];
  const license = {
    status: getValue1(dataRoot.children[1]),
    cbpq: getValue2(dataRoot.children[3]),
    categoria: getValue2(dataRoot.children[5]),
    atleta: getValue2(dataRoot.children[7]),
    clube: getValue2(dataRoot.children[9]),
    federacao: getValue2(dataRoot.children[11]),
    habilitacao: getValue2(dataRoot.children[13]),
    filiacao: getValue2(dataRoot.children[15]),
    validade: getValue1(dataRoot.children[17])
  }
  console.log(license)
}

const getValue1 = (node) => {
  return node.children[1].children[3].children[1].firstChild.firstChild.text
}

const getValue2 = (node) => {
  return node.children[1].children[3].children[1].firstChild.text
}

module.exports = { getLicense }