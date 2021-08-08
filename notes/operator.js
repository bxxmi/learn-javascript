// 1. String concatenation
console.log('my' + 'cat'); // my cat
console.log('1' + 2); // 12
console.log(`string literals: 1 + 2 = ${1 + 2}`); // string literals: 1 + 2 = 3

// 2. 사칙 연산자 
console.log(1 + 1);
console.log(1 - 1);
console.log(1 / 1);
console.log(1 * 1);
console.log(1 % 1);
console.log(1 ** 1);

// 3. 증감 연산자
let counter = 2;
// counter = counter + 1;
// preIncreament = counter
const preIncreament = ++counter;
const preDecrement = --counter;
// postIncreament = counter
// counter = counter + 1;
const postIncreament = counter++;
const postDecrement = counter--;

// 4. 대입 연산자 
let x = 3;
let y = 6;
x += y;
x -= y;
x *= y;
x /= y;

// 5. 비교 연산자
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

// 6. 논리 연산자: ||, &&, !
const value1 = false;
const value2 = 4 < 2;

// 6-1. || (or)
// || 연산자는 처음으로 true가 나오면 연산을 멈춤
// 📌 단순 value와 함수를 비교하는 경우 함수를 맨 마지막에 작성해야함 
console.log(`or: ${value1 || value2 || check()}`);

// 6-2. && (and)
// && 연산자는 처음으로 false가 나오면 연산을 멈추고 모든 결과는 false
// 📌 단순 value와 함수를 비교하는 경우 함수를 맨 마지막에 작성해야함 
// 📌 또한, 아래와 같이 간펀하게 null 체크를 할 수 있음
if (nullableObject != null) {
    nullableObject.something;
}

// 6-3. ! (false)
// 값을 반대로 바꿔줌
console.log(!value1);

// 7. Equality: ==, ===
const stringFive = '5';
const numberFive = 5;

// 7-1. ==
// 타입 체크 없이 값의 내용만 검사
console.log(stringFive == numberFive); // 결과: true
console.log(stringFive != numberFive); // 결과: false

// 📌 7-2. === (권장)
// 타입 체크를 하기 때문에 값의 내용이 같아도 타입이 다르면 false
console.log(stringFive === numberFive); // 결과: false
console.log(stringFive !== numberFive); // 결과: true

// 📌 Object equaliy by reference
// 객체는 메모리에 탑재될 때 레퍼런스 형태로 저장됨
// 따라서, 각기 다른 객체에 똑같은 데이터가 들어있어도 실제로는 다른 레퍼런스임
const bomi1 = {name:'bomi'};
const bomi2 = {name:'bomi'};
const bomi3 = bomi1;
console.log(bomi1 == bomi2); // 결과: false
console.log(bomi1 === bomi2); // 결과: false
console.log(bomi1 === bomi3); // 결과: true

// 8. If 
// if, else if, else
const name = 'bomi';
if (name === 'bomi') {
    console.log('hello bomi');
} else if (name === 'coder') {
    console.log('hello coder');
} else {
    console.log('unknown');
}

// 📌 9. ? 연산자
// 조건 ? value1 : value2
// 해당 조건이 참이라면 value1, 거짓이라면 value2 반환
// 간단하게 값을 반환할 때 사용하는 것이 좋음
console.log(name === 'bomi' ? 'yes' : 'no');

// 10. Switch
// else if 반복해서 사용해야할 경우 유용
// 타입스크립트 내에서 정해져 있는 타입을 검사할 때 유용
const browser = 'IE';
switch(browser) {
    case 'IE':
        console.log('IE');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('Hi internet');
        break;
    default:
        console.log("The end");
        break;
}

// Quiz 1. iterate from 0 to 10 and print only even numbers (use continue)
for(let i=0; i<=10; i++) {
    if(i % 2 !== 0) {
        continue;
    }
    console.log(i);
}

// Quiz 2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for(let i=0; i<=10; i++) {
    if(i > 8) {
        break;
    }
    console.log(i);
}