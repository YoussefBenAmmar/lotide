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


const results1 = map(words, (word) => word[0]);
const results2 = map(words, (word) => word + word);
const results3 = map(words, (word) => word[0] + word[word.length - 1]);

assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
assertArraysEqual(results2, [
  "groundground",
  "controlcontrol",
  "toto",
  "majormajor",
  "tomtom",
]);
assertArraysEqual(results3, ["gd", "cl", "to", "mr", "tm"]);



module.exports = map;