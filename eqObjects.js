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

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); // => true

assertEqual(eqObjects(multiColorShirtObject , anotherMultiColorShirtObject), true);

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject); // => false
assertEqual(eqObjects(multiColorShirtObject , longSleeveMultiColorShirtObject), false);false


module.exports = eqObjects;