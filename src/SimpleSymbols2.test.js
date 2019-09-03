const simpleSymbols2 = require('./SimpleSymbols2');

test('simpleSymbols1 +d+=3=+s+ to equal true', () => {
  expect(simpleSymbols2('+d+=3=+s+')).toBe(true);
});

test('simpleSymbols1 +d===+a+ to equal false', () => {
  expect(simpleSymbols2('+d===+a+')).toBe(false);
});