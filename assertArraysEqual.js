const assertEqual = require('./assertEqual');
const eqArrays = require ('./eqArrays');


const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)){
    console.log("Assertation Passed");
  } else {
    console.log("Assertation Failed");
  }
}


module.exports = assertArraysEqual;