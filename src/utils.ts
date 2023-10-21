function shuffleArray(array: number[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export function generateUniqueNumbers(max: number, count: number) {
  const numbers = Array.from({ length: max }, (_, index) => index + 1);
  const shuffledNumbers = shuffleArray(numbers);
  return shuffledNumbers.slice(0, count);
}
