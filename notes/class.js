'use strict'

// 1. Class declarations (added in ES6)
class Person {
  // constructor: 생성자
  constructor(name, age) {
    // field
    this.name = name;
    this.age = age;
  }

  // method
  speak() {
    console.log(`${this.name}: hello`);
  }
}

// new 연산자를 통해 Object 생성
const bomi = new Person('bomi', 26);
console.log(bomi.name);
console.log(bomi.age);
bomi.speak(); 

// 📌 2. (중요) Getter and setter
// 사용자가 입력하는 값의 오류를 해결하기 위해 사용함
// 이때, field에 작성한 변수 값을 그대로 사용하게 되면 call stack이 가득찬 오류가 발생함
// 그 이유는 age라는 getter를 정의하는 순간 field의 this.age가 getter 함수를 호출하고
// setter를 정의하는 순간 =age를 통해 값을 할당하는 것이 아닌 setter 함수를 호출하기 때문임 
// 즉, setter에 전달된 value는 this.age에 값을 할당할 때 메모리에 값을 업데이트하는 것이 아닌
// 반복해서 setter 함수를 호출하게 됨 
// 따라서, 이러한 오류를 해결하기 위해 getter, setter 함수에서 _age처럼 변수명을 달리해줘야함
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  // get: 값 리턴
  get age() {
    return this._age;
  }

  // set: 값 설정
  set age(value) {
    this._age = value < 0 ? "0" : value;
  }
}

const user1 = new User('Bomi', 'Kim', -1);
console.log(user1.age);

// 3. Fields (public, private)
// Too soon!
class Experiment {
  // public field
  publicField = 2;
  // private field: #변수명
  #privateField = 0;
}
 
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField); // 결과: undefined

// 4. Static properties and methods
// Too soon!
// 오브젝트, 들어오는 데이터에 상관없이 공통적으로 클래스에서 사용할 수 있는 것이라면
// 메모리의 사용을 줄이기 위해 static을 사용하는 것이 좋음 
class Article {
  static publisher = 'DreamCoding';
  constructor(articleName) {
    this.articleName = articleName;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

// 📌 5. (중요) Inheritance
// Extends 키워드 사용
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color of`);
  }

  getArea() {
    return width * this.height;
  }
}

// 상속으로 인해 Shape 클래스의 모든 필드, 메소드 사용 가능 
class Rectangle extends Shape {}

// 다형성: 클래스 내 수정이 필요한 부분 재정의(=오버라이딩)
class Triangle extends Shape {
  draw() {
    // 부모의 기존 메소드를 호출
    super.draw();
    console.log("This is Trangle Class log");
  }
  getArea() {
    return (this.width * this.height) / 2;
  }
}

// 6. Class chec king: instanceOf
// 왼쪽에 있는 오브젝트가 오른쪽 클래스의 인스턴스인지 판별함
console.log(rectangle instanceof Rectangle); // 결과: true
console.log(triangle instanceof Rectangle); // 결과: false
console.log(triangle instanceof Triangle); // 결과: true
console.log(triangle instanceof Shape); // 결과: true
// JS에서 만든 클래스, 오브젝트 등은 JS의 오브젝트를 상속받은 것
console.log(triangle instanceof Object); // 결과: true