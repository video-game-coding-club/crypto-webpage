import { shiftLetter, shiftText, isInteger } from '../helpers';

describe('Fake test', () => {
  test('it should pass', () => {
    expect(true);
  });
});

describe('Shift letters', () => {
  test('simple shifts', () => {
    expect(shiftLetter('a', 1)).toEqual('b');
    expect(shiftLetter('A', 1)).toEqual('B');
    expect(shiftLetter('a', 3)).toEqual('d');
    expect(shiftLetter('A', 3)).toEqual('D');
  });
  test('wrapping shifts', () => {
    expect(shiftLetter('a', 26)).toEqual('a');
    expect(shiftLetter('A', 26)).toEqual('A');
    expect(shiftLetter('a', 77)).toEqual('z');
    expect(shiftLetter('A', 77)).toEqual('Z');
  });
  test('simple negative shifts', () => {
    expect(shiftLetter('a', -1)).toEqual('z');
    expect(shiftLetter('A', -1)).toEqual('Z');
    expect(shiftLetter('a', -3)).toEqual('x');
    expect(shiftLetter('A', -3)).toEqual('X');
  });
  test('wrapping negative shifts', () => {
    expect(shiftLetter('a', -26)).toEqual('a');
    expect(shiftLetter('A', -26)).toEqual('A');
    expect(shiftLetter('a', -77)).toEqual('b');
    expect(shiftLetter('A', -77)).toEqual('B');
  });
  test('shifting special characters', () => {
    expect(shiftLetter('!', 2)).toEqual('!');
    expect(shiftLetter('#', 2)).toEqual('#');
    expect(shiftLetter('.', 2)).toEqual('.');
    expect(shiftLetter(' ', 4)).toEqual(' ');
    expect(shiftLetter('ä', 4)).toEqual('ä');
  });
});

describe('Shift text', () => {
  test('simple shifts', () => {
    expect(shiftText('Apple', 1)).toEqual('Bqqmf');
  });
});

describe('Check integer', () => {
  test('integer tests', () => {
    expect(isInteger(1)).toEqual(true);
    expect(isInteger('a')).toEqual(false);
    expect(isInteger(1.2)).toEqual(false);
  });
});