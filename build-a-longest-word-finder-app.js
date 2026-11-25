function findLongestWordLength (sentence){
  let longestWord = "";
  let words = sentence.trim().split(" ");

  for(let word of words){
    if(word.length > longestWord.length){
      longestWord = word;
    }
  }
  return longestWord.length
}

console.log(findLongestWordLength("May the force be with you"))