const numbers = [4, 5, 8, 3, 6, 1, 9, 2, 7]

function selectionSort (items) {
  let smaller;

  for (let i = 0; i < items.length - 1; i++) {
    smaller = i

    for (let j = i + 1; j < items.length; j++) {
      if (items[j] < items[smaller]) {
        smaller = j
      }
    }
    if (i != smaller) {
      [items[i], items[smaller]] = [items[smaller], items[i]]
    }
  }

  return items
}

const numbersInOrder = selectionSort(numbers)
console.log(numbersInOrder)
