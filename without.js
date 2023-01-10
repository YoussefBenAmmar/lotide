const emojiAngryFace = String.fromCodePoint(0x1F621);
const emojiFire = String.fromCodePoint(0x1F525);

const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`${emojiFire} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${emojiAngryFace} Assertion Failed: ${actual} === ${expected}`);
  }
};

const eqArrays = function (arr1, arr2){

  if (arr1.length !== arr2.length){
    return false;
  }
  for ( i = 0; i<arr1.length; i++){
    if (arr1[i] !== arr2[i]){
      return false
    } else if (arr1[i] === arr2[i]){
      return true
    } else {
      return false
    }
  }
}

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)){
    console.log("Assertation Passed")
  } else {
    console.log("Assertation Failed")
  }
}

const without = (source, itemsToRemove) => source.filter(item => !itemsToRemove.includes(item));

  /*let newArr = [];
  for (let item of source){
    if (!itemsToRemove.includes(item)){
      newArr.push(item)
    }
  }

  console.log(newArr)
  return newArr*/

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); 
without([0, 1, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
assertArraysEqual(words, ["hello", "world", "lighthouse"]);