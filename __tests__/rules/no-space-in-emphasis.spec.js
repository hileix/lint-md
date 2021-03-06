import lint from '../lint';

describe('no-space-in-emphasis', () => {
  test('success', () => {
    const md = `**hello, ~~world~~**`;
    expect(lint(md)).toEqual([]);
  });

  test('fail', () => {
    const md = `** hello, ~~world~~ **`;
    expect(lint(md)).toEqual([{
      level: 'error',
      start: {
        line: 1,
        column: 3,
      },
      end: {
        line: 1,
        column: 21,
      },
      text: `Emphasis content can not start / end with space: ' hello, world '`,
      type: 'no-space-in-emphasis'
    }]);
  });
});
