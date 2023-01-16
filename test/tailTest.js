const tail = require('../tail');

const assertEqual = require('../assertEqual');

const words = ["Yo Yo", "Lighthouse", "Labs"];
const words1 = ["Yo Yo"];
const words2 = [];

tail(words);
tail(words1);
tail(words2);
assertEqual(words.length, 3); // original array should still have 3 elements!