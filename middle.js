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

newArr = []

const middle = function(array) {
  for( i = 0; i<array.length; i++){
    if (array.length <=2 ){
      return [];
    } else if(array.length % 2 === 0){
      return [array[Math.floor((array.length - 1) / 2)], array[Math.floor(array.length / 2)]];
    } else {
      return [array[Math.floor(array.length / 2)]];
    }
  }
}
console.log(middle([1, 2, 3, 4, 5, 6]))