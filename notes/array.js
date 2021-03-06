'use strict';

// 1. Array Declaration
const arr1 = new Array();
const arr2 = [1, 2]; 

// 2. Index position
const fruits = ['π', 'π'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
// λ§μ§λ§ μΈλ±μ€ κ° κ°μ Έμ€κΈ°
console.log(fruits[fruits.length - 1]);

// 3. Looping over an array
// print all fruits
// a. for ... of
for(let fruit of fruits) {
  console.log(fruit);
}

// π b. forEach
fruits.forEach((fruit) => console.log(fruit));

// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push('π', 'π');

// pop: remove an item from the end
fruits.pop();

// unshift: add an item to the beginning (too slow)
fruits.unshift('π', 'π');

// shift: remove an item from the beginning (too slow)
fruits.shift();

// splice: remove an item by index position 
fruits.push('π', 'π', 'π', 'π₯');
fruits.splice(0, 0);
// also possible add item
fruits.splice(0, 0, 'π½', 'π');

// combine two arrays
const fruits2 = ['π', 'π'];
const newFruits = fruits.concat(fruits2);

// 5. Searching
// indexOf: find the index (number type)
console.log(fruits.indexOf('π'));
// lastIndexOf : find the last index when there are duplicate values
console.log(fruits.lastIndexOf('π'));
// includes: find the index (boolean type)
console.log(fruits.includes('π'));