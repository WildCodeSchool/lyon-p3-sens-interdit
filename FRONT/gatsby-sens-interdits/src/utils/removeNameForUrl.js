const removeNameForUrl = function (text, pageName) {
    return text.replace(pageName, "");
  }

module.exports.removeNameForUrl = removeNameForUrl;