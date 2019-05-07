var xmldoc = require('xmldoc');
const ValidationError = require('./exception')

const toJson = (html) => {
  const document = new xmldoc.XmlDocument(html);
  const root = document.children[11]
  const dataRoot = root.children[1];

  if (!dataRoot) {
    throw new ValidationError(404, 'Atleta não encontrado')
  }

  const license = {
    status: getValue1(dataRoot.children[1]),
    cbpq: getValue2(dataRoot.children[3]),
    categoria: getValue2(dataRoot.children[5]),
    atleta: getValue2(dataRoot.children[7]),
    clube: getValue2(dataRoot.children[9]),
    federacao: getValue2(dataRoot.children[11]),
    habilitacao: getValue2(dataRoot.children[13]),
    filiacao: getValue2(dataRoot.children[15]),
    validade: getValue1(dataRoot.children[17]),
    image: `https:${root.children[3].children[1].children[1].children[1].attr.src}`,
    emissao: getDataEmissao(document)

  }
  console.log(document.children[13].children[3])
  return license
}

const getValue1 = (node) => {
  return node.children[1].children[3].children[1].firstChild.firstChild.text
}

const getValue2 = (node) => {
  return node.children[1].children[3].children[1].firstChild.text
}

const getDataEmissao = (document) => {
  const holder = document.children[13].children[3]
  if (holder) {
    return new String(holder.children[1].children[2].text).trim()
  } else {
    return null
  }
}

module.exports = { toJson }