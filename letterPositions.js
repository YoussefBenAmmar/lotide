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
    } else if (arr1[i] === arr2[i]){
      return true
    } else {
      return false
    }
  }
}


const assertArraysEqual = function (arr1, arr2) {
  if (arr1 === undefined || arr2 === undefined){
    console.log("arr1 and arr2 can not be undefined")
    return 
  }
  if (eqArrays(arr1, arr2)){
    console.log("Assertation Passed")
  } else {
    console.log("Assertation Failed")
  }
}


const letterPositions = function(sentence) {
  const results = {};

  let position = []


  const newStr = sentence.toLowerCase();

  for (let i = 0; i < newStr.length; i++){
    if (newStr[i] === " "){
      continue
    }
    let chrtr = newStr[i];
    if(!results[chrtr]){
      results[chrtr] = [i];
    } else {
      results[chrtr].push(i);
    }
  }
  console.log(results)
  return results;
};

// results ={ l: [1, 4], m:[4], e:[1]}

assertArraysEqual(letterPositions("hello Hkshbe").e, [1, 11]);

module.exports = letterPositions;