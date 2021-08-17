// Remove Duplicates!
const array = ['🐶', '🐱', '🐕', '🐶', '🐫', '🐱'];

// Set: 고유값만 저장되기 때문에 중복 데이터가 없다
console.log([...new Set(array)]);