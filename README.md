# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jsnmarkd/lotide`

**Require it:**

`const _ = require('@jsnmarkd/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: Returns the first element of an array.
* `tail`: Returns all but the first element of array.
* `middle`: Returns the element of the middle index of an array.
* `without`: Returns an array after removing some elements.
* `takeUntil`: Returns an array after matching an element.
* `map`: Returns an array of just the first letter of the element.
* `letterPositions`: Returns the index of the letter.
* `flatten`: Returns an array of a nested array.
* `findKey`: Returns the key of an object.
* `findKeyByValue`: Returns the value of the key.
* `eqObjects`: Returns true or false if objects are equal.
* `eqArrays`: Returns true or false if arrays are equal.
* `countOnly`: Returns the count of the given array and element.
* `countLetters`: Returns the count of the given string and element.
* `assertObjectsEqual`: Returns true or false of given assertion.
* `assertArraysEqual`: Returns true or false of given assertion.
* `assertEqual`: Returns true or false of given assertion.