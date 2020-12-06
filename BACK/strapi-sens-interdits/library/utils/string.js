const utf8 = require('utf8')
const stringSearch = (str) => {
  if (str === null) {
    console.log('ta meeme');
  }
  str = decodeURI(utf8.encode(str));
  return str
    .trim()
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
    if( data[i] !== null) {
      str += stringSearch(data[i]) +' ';
    }
  }
  return str;
}

exports.sluggify = function (text) {
  return text
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/-+/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
};
