// Looping
// Q1. 짝수인 경우 4배된 값 출력
const items = [1,2,3,4,5,6];

// Good Code ✨
const evens = items.filter((num) => num % 2 === 0);
const multiple = evens.map((num) => num * 4);
console.log(multiple);

// Good Code ✨
const result = items 
  .filter((num) => num % 2 === 0)
  .map((num) => num * 4);

console.log(result);