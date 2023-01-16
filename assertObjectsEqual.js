const emojiAngryFace = String.fromCodePoint(0x1F621);
const emojiFire = String.fromCodePoint(0x1F525);


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
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`${emojiFire} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${emojiAngryFace} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function(object1, object2) {

  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2)

  if (keys1.length !== keys2.length){
    return false
  }
  for (let key of keys1){
    const value1 = object1[key] 
    const value2 = object2[key]
    if (Array.isArray(value1) && Array.isArray(value2)){
      eqArrays(value1, value2)
    } else if (value1 !== value2){
      return false
    }
  }
  return true
};

const assertObjectsEqual = function (actual, expected) {

  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)){
      console.log(`${emojiFire} Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    } else {
      console.log(`${emojiAngryFace} Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
    }
}


const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject);

module.exports = assertObjectsEqual;