const encode = param => ((param.match(/[aeiou]/gi) || []).length) == 0 ? param.replace('a', 1).replace('e', 2).replace('i', 3).replace('o', 4).replace('u', 5) : encode (param.replace('a', 1).replace('e', 2).replace('i', 3).replace('o', 4).replace('u', 5));

module.exports = encode;
