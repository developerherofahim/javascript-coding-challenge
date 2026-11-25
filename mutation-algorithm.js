function mutation(arrOfTwoElements) {
  const firstWord = arrOfTwoElements[0].trim().toLowerCase();
  const secondWord = arrOfTwoElements[1].trim().toLowerCase();
  for (let char of secondWord) {
    if (!firstWord.includes(char)) {
      return false;
    }
  }
  return true;
}
