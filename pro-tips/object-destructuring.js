// Ojbect Destructuring
const person = {
  name: 'Bomi',
  age: 26,
  phone: '01000000000'
};

// Bad Code 💩
function displayPerson(person) {
  displayAvater(person.name);
  displayName(person.name);
  displayProfile(person.name, person.age);
}

// Good Code ✨
function displayPerson(person) {
  const { name, age } = person;
  displayAvater(name);
  displayName(name);
  displayProfile(name, age);
}