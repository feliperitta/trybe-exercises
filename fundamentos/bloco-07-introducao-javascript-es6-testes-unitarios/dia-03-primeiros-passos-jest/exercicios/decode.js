const decode = param => ((param.match(/[12345]/gi) || []).length) == 0 ? param.replace('1', 'a').replace('2', 'e').replace('3', 'i').replace('4', 'o').replace('5', 'u') : decode(param.replace('1', 'a').replace('2', 'e').replace('3', 'i').replace('4', 'o').replace('5', 'u'));

module.exports = decode;
