const emojiAngryFace = String.fromCodePoint(0x1F621);
const emojiFire = String.fromCodePoint(0x1F525);

const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`${emojiFire} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${emojiAngryFace} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (str){
  const result = {};

  const newStr = str.toLowerCase().split(" ").join("");

  for (let letter of newStr) {
    if(!result[letter]){
      result[letter] = 1
    } else if (result[letter] === ' ') {
      result[letter] = 0
    } else { 
      result[letter] ++
    }
    }
    console.log(result)
  return result
}


const result = countLetters("lighthouse in the house") 

assertEqual(result["Jason"], 1);