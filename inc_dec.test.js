const { increment, decrement } = require('./inc_dec');

test('increments 2 to equal 3', () => {
  expect(increment(2)).toBe(3);
});

test('decrements 2 to equal 1', () => {
  expect(decrement(2)).toBe(1);
});