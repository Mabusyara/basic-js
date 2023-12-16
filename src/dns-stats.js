const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let allDomains = [];
  for (let domain of domains) {
    domain = domain.split('.').reverse();
   allDomains = allDomains.concat(domain.reduce((acc, item, index) => {
      if (index === 0) acc.push('.' + item);
      else acc.push(acc.at(-1) + '.' + item);
      return acc;
    }, []));
  }
  let set = new Set(allDomains);
  let map = new Map();
  set.forEach(item => map.set(item, 0));
  allDomains.forEach(item => map.set(item, map.get(item) + 1));

  return Object.fromEntries(map.entries());
}

module.exports = {
  getDNSStats
};
