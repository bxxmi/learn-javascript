'use strict';

// 1. Array Declaration
const arr1 = new Array();
const arr2 = [1, 2]; 

// 2. Index position
const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
// 마지막 인덱스 값 가져오기
console.log(fruits[fruits.length - 1]);

// 3. Looping over an array
// print all fruits
// a. for ... of
for(let fruit of fruits) {
  console.log(fruit);
}

// 📌 b. forEach
fruits.forEach((fruit) => console.log(fruit));

// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push('🍓', '🍒');

// pop: remove an item from the end
fruits.pop();

// unshift: add an item to the beginning (too slow)
fruits.unshift('🍓', '🍒');

// shift: remove an item from the beginning (too slow)
fruits.shift();

// splice: remove an item by index position 
fruits.push('🍓', '🍒', '🍋', '🥝');
fruits.splice(0, 0);
// also possible add item
fruits.splice(0, 0, '🌽', '🍑');

// combine two arrays
const fruits2 = ['🍈', '🍇'];
const newFruits = fruits.concat(fruits2);

// 5. Searching
// indexOf: find the index (number type)
console.log(fruits.indexOf('🍓'));
// lastIndexOf : find the last index when there are duplicate values
console.log(fruits.lastIndexOf('🍇'));
// includes: find the index (boolean type)
console.log(fruits.includes('🍇'));