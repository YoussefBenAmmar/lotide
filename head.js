const emojiAngryFace = String.fromCodePoint(0x1F621);
const emojiFire = String.fromCodePoint(0x1F525);

const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`${emojiFire} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${emojiAngryFace} Assertion Failed: ${actual} === ${expected}`);
  }
};


function head(arr) {
  
  return arr[0]
  }


  assertEqual(head([6]), 5);
  assertEqual(head([]), "Hello");
