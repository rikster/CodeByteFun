const stringToSentenceText2 = require('./StringToSentenceText2');

test('stringToSentenceText2 I\'m a little tea pot to be I\'m A Little Tea Pot', () => {
    expect(stringToSentenceText2('I\'m a little tea pot')).toBe('I\'m A Little Tea Pot');
});
