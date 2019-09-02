const stringToSentenceText1 = require('./StringToSentenceText1');

test('stringReverse1 I\'m a little tea pot to be I\'m A Little Tea Pot', () => {
    expect(stringToSentenceText1('I\'m a little tea pot')).toBe('I\'m A Little Tea Pot');
});
