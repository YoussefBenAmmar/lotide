const assertEqual = require('./assertEqual')
const eqArrays = require('./eqArrays')
const assertArraysEqual = require('./assertArraysEqual')

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

module.exports = middle;
