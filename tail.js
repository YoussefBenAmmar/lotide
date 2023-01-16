const assertEqual = require('./assertEqual')

function tail(arr) {
  
  return arr.slice(1);
  };



const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it

module.exports = tail;
