const encode = require('./encode.js');

it('Encrypt vowals per numbers.', () => {
  expect(encode('aeiouu')).toBe('123455');
});