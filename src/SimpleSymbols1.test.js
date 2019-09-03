const simpleSymbols1 = require('./SimpleSymbols1');

test('simpleSymbols1 +d+=3=+s+ to equal true', () => {
  expect(simpleSymbols1('+d+=3=+s+')).toBe(true);
});

test('simpleSymbols1 +d===+a+ to equal false', () => {
  expect(simpleSymbols1('+d===+a+')).toBe(false);
});