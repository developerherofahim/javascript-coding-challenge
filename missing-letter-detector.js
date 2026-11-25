function fearNotLetter(str){
  
  for(let i = str.charCodeAt(0); i <= str.charCodeAt(str.length-1); i++){
    const character = String.fromCharCode(i);
    if(!str.includes(character)){
      return character;
    }
  }
  return undefined;
}

console.log(fearNotLetter("abce"))