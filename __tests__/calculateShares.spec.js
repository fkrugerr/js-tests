const calculateShares = require('../src/calculateShares');
const generateArr = require('../src/generateArr');

describe("Shares calculator function", () => {
  test("it should return percentages with three decimal places accuracy", () => {
    const input = [
      '1.5',
      '3',
      '6',
      '1.5'
    ];
    const output = [
      '12.500',
      '25.000',
      '50.000',
      '12.500'
    ];
    expect(calculateShares(input)).toEqual(output);
  });

  test("The sum of the returned array of 100 elements must tends to 100", () => {
    const input = generateArr(100);
    expect(calculateShares(input).reduce(
      (acc, curr) => acc + curr * 1000, 0
    ) / 1000).toBeCloseTo(100);
  });
});
