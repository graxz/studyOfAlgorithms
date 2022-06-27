const items = [4, 5, 8, 3, 6, 1, 9, 2, 7]

function insertionSort (numbers) {
  let atual;

  for (let nextCard = 1; nextCard < numbers.length; nextCard++) {
    let previousCard = nextCard - 1
    atual = numbers[nextCard]

    while(previousCard >= 0 && atual < numbers[previousCard]) {
      numbers[previousCard+1] = numbers[previousCard]
      previousCard--
    }

    numbers[previousCard+1] = atual
  }
  
  return numbers
}

const numbersInOrder = insertionSort(items)
console.log(numbersInOrder)
