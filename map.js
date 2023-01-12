const emojiAngryFace = String.fromCodePoint(0x1F621);
const emojiFire = String.fromCodePoint(0x1F525);

const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`${emojiFire} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${emojiAngryFace} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (arr1, arr2){

  if (arr1.length !== arr2.length){
    return false;
  }
  for ( i = 0; i<arr1.length; i++){
    if (arr1[i] !== arr2[i]){
      return false
    }
  }
  return true
}

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)){
    console.log("Assertation Passed")
  } else {
    console.log("Assertation Failed")
  }
}




const words = ["tilk", "moomerang", "zatooine"]//, "ForzaInter", "shallow", "origami", "clams"]


const map = function(array, callback){
  const result = [];

  for(let item of array){
    result.push(callback(item))
  }

  return result
}

const result1 = map(words, (word) => word<=4);
console.log(result1)

assertArraysEqual(result1, ["tdhh", "mbshsjnsn", "z"]);


