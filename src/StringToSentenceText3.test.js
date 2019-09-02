const stringToSentenceText3 = require('./StringToSentenceText3');

test('stringToSentenceText3 I\'m a little tea pot to be I\'m A Little Tea Pot', () => {
  expect(stringToSentenceText3('I\'m a little tea pot')).toBe('I\'m A Little Tea Pot');
});