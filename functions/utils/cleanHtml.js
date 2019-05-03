const clear = (response) => {

  let clean = response;

  // extract content
  const start = "<!-- content 7 -->";
  let startIndex = clean.indexOf(start);
  startIndex = startIndex + start.length;
  const endIndex = clean.lastIndexOf("<!-- side right -->");
  clean = clean.substring(startIndex, endIndex);

  // delete script
  clean = remove(clean, '<script type=\"text/javascript\">', "</script>");

  // Replaces
  clean = clean
    .replace(/\t/g, "")
    .replace(/\r/g, "")
    .replace(/\n/g, "")
    .replace(/<br>/g, "")
    .replace(/<hr>/g, "")
    .replace(/&ccedil;/g, "ç")
    .replace(/&atilde;/g, "ã")
    .replace(/checked/g, "")
    .replace(/ color=black/g, "")
    .replace(/ color=red/g, "");

  // Appends
  const regex = /class="img-thumbnail cbpq-consulta-img">/g
  const replace = "class=\"img-thumbnail cbpq-consulta-img\"></img>"
  clean = clean.replace(regex, replace);

  return clean;
}

const remove = (text, start, end) => {
  const left = text.substring(0, text.indexOf(start))
  const subEnd = text.indexOf(end) + end.length
  const right = text.substring(subEnd, text.length)
  return left + right;
}

module.exports = { clear }