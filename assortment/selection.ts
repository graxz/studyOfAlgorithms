export function selectionSort(items) {
  let smaller;

  for (let i = 0; i < items.length - 1; i++) {
    smaller = i;

    for (let j = i + 1; j < items.length; j++) {
      if (items[j] < items[smaller]) {
        smaller = j;
      }
    }
    if (i != smaller) {
      [items[i], items[smaller]] = [items[smaller], items[i]];
    }
  }

  return items;
}
