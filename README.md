# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @youssefba/lotide`

**Require it:**

`const _ = require('@youssefba/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(assertArraysEqual)`: checks the assertion if Arrays are equal to expected outcome
* `function2(assertEqual)`: checks assertion if primitive entry is equal to expected outcome
* `function3(assertObjectsEqual)`: checks assertion if object is equal to expected outcome
* `function1(head)`: returns the first element of an array
* `function2(tail)`: retruns an array of everything but th eifrst element of the original array
* `function3(middle)`: returns an array consisting of the middle element of original array if original array length is odd, and the two middle if the original array lengths is even.
* `function1(countLetters)`:  counts all the letters in a string.
* `function2(countOnly)`: counts a specific element in a string.
* `function3(eqArrays)`: checks if 2 arrays are identical
* `function1(eqObject)`: checks if 2 objects are identical
* `function2(findKey)`: finds how many obejcts fill a condidtion by using their key.
* `function3(findKeyByValue)`: finds the key of an object using it's value with a callback function.
* `function1(flatten)`: return a specific key when a conditionis met
* `function2(lettersPositions)`: creates an objects thats logs all the letters position and their count.
* `function3(map)`: creates a new array that is filled elements filling a condition.
* `function2(without)`: removes an item from an array
* `function3(takeUntil)`: returns an array until  a specific conditoin is met. 
