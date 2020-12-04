const utf8 = require('utf8')
const stringSearch = (str) => {
  str = decodeURI(utf8.encode(str));
  return str
    .toLowerCase()
    .normalize("NFD") // to unicode standards
    .replace(/[\u0300-\u036f]/g, "") // replace special char
    .replace(/[^0-9a-zA-Z]+/g, " ") // replace special char
    .replace(/<.*?>/g, "") // strip html tags
    .replace('!\s+!', " ") // replace linux spaces
    .replace('  ', ' ') // replace multiple spaces
}
exports.stringSearch = stringSearch;

exports.dataToSearch = (data) => {
  let str = '';
  for (let i in data) {
    str += stringSearch(data[i]);
  }
  return str;
}
