const decode = require('./decode.js');

it('Decrypt numbers per vowals.', () => {
  expect(decode('1122334455')).toBe('aaeeiioouu');
});