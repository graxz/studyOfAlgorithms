import { selectionSort } from "../assortment/selection";

describe("selection sort test", () => {
  test("should be return with numbers order", () => {
    const disorderedNumbers = [2, 5, 7, 3, 1, 6, 9, 4, 8];
    const orderedNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    expect(selectionSort(disorderedNumbers)).toStrictEqual(orderedNumbers);
  });
});
