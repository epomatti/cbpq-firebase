const clear = (response) => {

  let clean = response;

  // extract content
  const start = "<!-- content 7 -->";
  let startIndex = clean.indexOf(start);
  startIndex = startIndex + start.length;
  const endIndex = clean.lastIndexOf("<!-- side right -->");
  clean = clean.substring(startIndex, endIndex);

  // Replaces
  clean = clean
    .replace("\r", "")
    .replace("\n", "")
    .replace("<br>", "")
    .replace("<hr>", "")
    .replace("&ccedil;", "ç")
    .replace("&atilde;", "ã")
    .replace("checked", "")
    .replace(" color=black", "")
    .replace(" color=red", "");

  // Appends
  const regex = /class="img-thumbnail cbpq-consulta-img">/g
  const replace = "class=\"img-thumbnail cbpq-consulta-img\"></img>"
  clean = clean.replace(regex, replace);

  return clean;
}

module.exports = { clear }