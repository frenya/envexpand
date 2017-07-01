'use strict';

module.exports = envexpand;

function envexpand(env) {

  function expand(x) {
    if (!x) return x;
    else if (Array.isArray(x)) return expandArray(x);
    else if (typeof x === 'object') return expandObject(x);
    else if (typeof x === 'string') return expandString(x);
    else return x;
  }

  function expandString (string) {
    return string.replace(/\$[\w]+/g, function(match) {
      var name = match.replace('$', '');
      return env[name] || match;
    });
  }

  function expandObject (obj) {
    return Object.keys(obj).reduce(function(result, key) {
      result[key] = expand(obj[key]);
      return result;
    }, {});
  }

  function expandArray (arr) {
    return arr.map(expand);
  }

  return expand;

}
