import Validator from '../app';

test('name onlyLetters', () => {
  const received = Validator.validateUsername('user-name');
  expect(received).toBe(true);
});

test('name noStartNumber', () => {
  const received = Validator.validateUsername('7user-name');
  expect(received).toBe(false);
});

test('name noEndNumbers', () => {
  const received = Validator.validateUsername('user-name45');
  expect(received).toBe(false);
});

test('name noThreeDigits', () => {
  const received = Validator.validateUsername('U4567ser-name');
  expect(received).toBe(false);
});

test('name noStartSymbol', () => {
  const received = Validator.validateUsername('-User');
  expect(received).toBe(false);
});
