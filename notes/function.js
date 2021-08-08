// 1. Function
// 프로그램 내 가장 기본적인 building block
// 서브 프로그램이라고도 불리며 여러 번 재사용 가능
// 📌 하나의 함수는 한 가지 일만 하도록 구현
// 📌 함수 네이밍 방법: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// 📌 JS에서 함수는 객체이기 때문에 변수에 할당하거나 파라미터로 전달 및 리턴 시 사용 가능
function printHello(message) {
    console.log(message);
}
printHello('Hello');

// TS 맛보기
// function 함수명(파라미터: 파라미터의 데이터 타입): 리턴 데이터 타입 {...} 
function printHello(message: string): number {
    console.log(message);
    retrun 0;
}

// 2. Parameters
// 함수에서 전달되는 값을 의미함
// premitive 타입의 파라미터는 메모리에 값이 그대로 저장됨
// object 타입의 파라미터는 메모리에 레퍼런스가 저장됨
function changeName(obj) {
    obj.name = 'coder';
}
const bomi = {name : 'bomi'};
changeName(bomi);
console.log(bomi); // 결과: coder

// 3. Default parameters (added in ES6)
// 전달받지 못한 파라미터는 undefined라는 값이 자동으로 출력됨
function showMessage(message, from) {
    console.log(`${message} by ${from}`);
}
showMessage('Hello'); // 결과: Hello by undefined

// 📌 파라미터의 디폴트 값을 지정할 경우 아래와 같이 사용
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage('Hello'); // 결과: Hello by unknown 

// 4. Rest parameters (added in ES6)
// function 함수명(...파라미터) {...}
// 📌 배열 형태로 값이 전달됨 
function printAll(...args) {
    for(let i=0; i<args.length; i++) {
        console.log(args[i]);
    }
}
printAll('kim', 'bo', 'mi');

// 📌 5. (중요) Local scope
// 밖에서는 안이 보이지 않고, 안에서만 밖을 볼 수 있다
// 또한, 함수가 중첩된 경우 부모 함수에서는 자식 함수내에 정의된 변수를 사용할 수 없음
// 그러나 자식 함수는 부모 함수의 변수를 사용할 수 있음(=클로저)
let globalMessage = 'global'; // 전역 변수 
function printMessage() {
    let message = 'hello'; // 지역 변수
    console.log(message); // 결과: hello
    console.log(globalMessage); // 결과: global
}
console.log(message); // 결과: 에러 발생
printMessage();

// 6. Return a value
function sum(a, b) {
    retrun a + b;
}
const result = sum(1, 2);
console.log(result); // 결과: 3

// 📌 7. (중요) Early return, Early exit
// 어떤 조건을 만족할 때만 실행되는 로직이 있다면 
// 그 조건을 만족하지 않은 경우를 먼저 선언하는 것이 좋음
// e.g. Bad Logic
function badFunction(user) {
    if (user.point > 10) {
        // long logic ...
    }
}

// e.g. Good Logic
function goodFunction(user) {
    if (user.point <= 10) {
        retrun;
    }
    // long logic
}

// 8. Function expression
// 변수에 함수 할당
const print = function() {
    console.log('print');
}
print(); // 결과: print
const printAgain = print;
printAgain(); // 결과: print

// 📌 9. (중요) Callback function using function expression
// 콜백함수는 파라미터로 전달되는 함수를 말함
// function 함수명(파라미터1, 파라미터2(함수) ... ) {...} 
// 즉, 파라미터2는 콜백함수이다
function randomQuiz(answer, printYes, printNo) {
    if(answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}

// 익명 함수
const printYes = function() {
    console.log('YES');
};

// 기명 함수
// 함수 안에서 자신을 다시 호출할 때 사용 e.g. 피보나치 수열
const printNo = function print() {
    console.log('NO');
};

randomQuiz('hate you', printYes, printNo); // 결과: NO
randomQuiz('love you', printYes, printNo); // 결과: YES

// 📌 10. (중요) Arrow function
// 항상 익명 함수의 형태를 띔
const simplePrint = () => console.log('simplePrint');
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
    return a * b;
};

// 📌 11. IIFE
// 함수 선언과 동시에 실행
(function hello() {
    console.log('IIFE');
})();