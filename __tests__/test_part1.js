/* global describe, beforeAll, it, page, expect */

beforeAll(async () => {
  await page.goto('http://localhost:8000/exercise/part1-types-variables-math/');
});

describe('The variable `a`', () => {
  it('should have a value greater than 30', async () => {
    /* global resultTask1 */
    const taskResult = await page.evaluate(() => resultTask1);
    expect(taskResult).toBe(true);
  });
});
describe('The variable `b`', () => {
  it('should have a type of "string"', async () => {
    /* global resultTask2 */
    const taskResult = await page.evaluate(() => resultTask2);
    expect(taskResult).toBe(true);
  });
});
describe('The variable `c`', () => {
  it('should match the index of the item "plum"', async () => {
    /* global resultTask3 */
    const taskResult = await page.evaluate(() => resultTask3);
    expect(taskResult).toBe(true);
  });
});
describe('The variable `d`', () => {
  it('should be the length of the string "cassiopeia"', async () => {
    /* global resultTask4 */
    const taskResult = await page.evaluate(() => resultTask4);
    expect(taskResult).toBe(true);
  });
});
describe('The variable `e`', () => {
  it('should have a remainder of 3 when divided by 5', async () => {
    /* global resultTask5 */
    const taskResult = await page.evaluate(() => resultTask5);
    expect(taskResult).toBe(true);
  });
});
