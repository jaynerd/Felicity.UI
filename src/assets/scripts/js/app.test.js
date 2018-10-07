const { getTimeSuffix } = require("./app")

test('adds the correct time suffix for hours <12', () => {
  expect(getTimeSuffix(0)).toBe('AM');
  expect(getTimeSuffix(1)).toBe('AM');
  expect(getTimeSuffix(2)).toBe('AM');
  expect(getTimeSuffix(3)).toBe('AM');
  expect(getTimeSuffix(4)).toBe('AM');
  expect(getTimeSuffix(5)).toBe('AM');
  expect(getTimeSuffix(6)).toBe('AM');
  expect(getTimeSuffix(7)).toBe('AM');
  expect(getTimeSuffix(8)).toBe('AM');
  expect(getTimeSuffix(9)).toBe('AM');
  expect(getTimeSuffix(10)).toBe('AM');
  expect(getTimeSuffix(11)).toBe('AM');
});

test('adds the correct time suffix for hours >=12', () => {
    expect(getTimeSuffix(12)).toBe('PM');
    expect(getTimeSuffix(13)).toBe('PM');
    expect(getTimeSuffix(14)).toBe('PM');
    expect(getTimeSuffix(15)).toBe('PM');
    expect(getTimeSuffix(16)).toBe('PM');
    expect(getTimeSuffix(17)).toBe('PM');
    expect(getTimeSuffix(18)).toBe('PM');
    expect(getTimeSuffix(19)).toBe('PM');
    expect(getTimeSuffix(20)).toBe('PM');
    expect(getTimeSuffix(21)).toBe('PM');
    expect(getTimeSuffix(22)).toBe('PM');
    expect(getTimeSuffix(23)).toBe('PM');
  });