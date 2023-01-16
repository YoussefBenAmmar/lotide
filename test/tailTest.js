// const assertEqual = require('../assertEqual')
// const tail = require('../tail')


// arr = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(arr, ["Lighthouse", "Labs"]); 


// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!


const assertEqual = require('../assertEqual');
const assert = require('chai').assert;
const tail = require('../tail');


describe("#tail", () => {
  // it("returns 3 for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
  //   assert.deepEqual(words.length, 3);
  // });

  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
})

