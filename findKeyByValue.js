const emojiAngryFace = String.fromCodePoint(0x1F621);
const emojiFire = String.fromCodePoint(0x1F525);

const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`${emojiFire} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${emojiAngryFace} Assertion Failed: ${actual} !== ${expected}`);
  }
};

/*const findKeyByValue = function(bestTVShowsByGenre, genres){
  for (let genre in bestTVShowsByGenre){
    if ( bestTVShowsByGenre.hasOwnProperty(genre)){
      if( bestTVShowsByGenre[genre] === genres)
      return genre
    }
  }
}*/

const findKeyByValue = function (bestTVShowsByGenre, genres){
    for (let genre of Object.keys(bestTVShowsByGenre)){
      if (bestTVShowsByGenre[genre] === genres){
        return genre
      }
    }
  }
  

  
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);