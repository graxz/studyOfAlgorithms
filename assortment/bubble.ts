export function bubbleSort(numbers) {
  let swap;
  let last = numbers.length - 1;

  do {
    swap = false;
    for (let i = 0; i < last; i++) {
      if (numbers[i] > numbers[i + 1]) {
        [numbers[i], numbers[i + 1]] = [numbers[i + 1], numbers[i]];
        swap = true;
      }
    }

    last--;
  } while (swap);

  return numbers;
}
