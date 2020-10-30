import { shiftLetter } from '../helpers';

describe('Fake test', () => {
  test('it should pass', () => {
    expect(true);
  });
});

describe('Shift letters', () => {
  test('simple shifts', () => {
    expect(shiftLetter('a', 1)).toEqual('b');
    expect(shiftLetter('a', 3)).toEqual('d');
    expect(shiftLetter('B', 1)).toEqual('C');
  });
});
