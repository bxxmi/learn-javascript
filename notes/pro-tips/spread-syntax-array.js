// Spread Syntax - Array
let fruits = ['🍉', '🍓', '🍇'];

// fruits.push('🍑');
fruits = [...fruits, '🍑'];

// fruits.unshift('🍑');
fruits = ['🍑', ...fruits];

// Concatenation
const fruits2 = ['🍉', '🍓', '🍇'];
let combined = fruits.concat(fruits2);
combined = [...fruits, ...fruits2];