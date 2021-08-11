// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  // bomi
  // const result = fruits.toString();

  // ellie
  const fruits_string = fruits.join();
}

// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  const fruits_arr = fruits.split(',');
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  // bomi
  // array.sort((a,b) => b-a);

  // ellie
  // reverse(): 기존 배열도 같이 변화됨
  const array_result = array.reverse();
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const array_splice = array.slice(2, 5);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
  const student_90 = students.find((student) => student.score === 90);
}

// Q6. make an array of enrolled students
{
  const student_array = students.filter((student) => student.enrolled);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const student_score_arr = students.map((student) => student.score);
}

// Q8. check if there is a student with the score lower than 50
{
  const student_check = students.some((student) => student.score < 50);

  // every(): 모든 조건이 다 맞아야지만 true 반환
  // const every = students.every((student) => student.score < 50);
}

// Q9. compute students' average score
{
  const average_score = students.reduce((prev, curr) => prev + curr.score, 0);
  console.log(average_score / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const students_all = students.map((student) => student.score).join();
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students.map((student) => student.score)
  .sort((a, b) => a - b)
  .join();
}
