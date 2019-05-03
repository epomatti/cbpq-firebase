const api = require('../integration/cbpq')
const cleanHtml = require('../utils/cleanHtml.js')
const parseString = require('xml2js').parseString;

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
  parseString(html, function (err, result) {
    if (err) {
      console.error(err)
      console.log(html)
    } else {
      //console.log(html)
      //console.log(result)
      // console.log(result.div.div);
      console.log(JSON.stringify(result.div.div[1].div[0].div)); // dados
      //console.log(JSON.stringify(result.div.div[1].div[1])); // img
      //console.log(JSON.stringify(result.div.div[2]));

      //console.dir(JSON.stringify(result));
    }
    return result
  });
}

module.exports = { getLicense }