'use strict'

// 2. Variable, rw(read/write)
// let (added in ES6)
// 전역 변수는 애플리케이션 실행 직후부터 끝날 때까지 메모리에 탑재 => 최소한으로 사용할 것
// class, function, if, for loop 과 같이 필요한 부분에만 사용
let globalName = 'global name';
{
    let name = 'bomi';
    console.log(name);
    // 값 재할당 가능
    name = 'hello';
    console.log(name);
}
console.log(name);
console.log(globalName);

// var: 더 이상 사용X
// 변수 선언 전에 값을 할당 및 호출이 가능 => 대규모 프로그램 제작 시 오류 위험 증가
// 📌 var hoisting: 어디에 선언했는지 상관없이 항상 제일 위로 선언을 끌어올려주는 것
// ex) 맨 아래 age 변수 선언 후 맨 위에서 해당 변수 호출 시 값 출력

// 3. Constant, read only 
// 📌 실무에서 const 키워드를 통해 변수를 선언함
// 선언과 동시에 값 할당 후 절대 값을 변경할 수 없는 변수
// for 보안성 향상, 변수에 대한 여러 스레드의 동시 작업 막기, 코드 변경 시 실수 방지
const daysInWeek = 7;
const maxNumber = 5;

// 📌 4. Variable types
// primitive types: 더 이상 작은 단위로 나눠질 수 없는 한 가지의 아이템으로 값 자체가 메모리에 적재됨
// ex) number, string, boolean, null, undefined, symbol

// object types: 여러 primitive types를 하나로 묶어서 관리되며 오브젝트를 가리키는 레퍼런스가 메모리에 적재됨
// function(=first-class function): 함수가 변수에 할당 및 인자로 전달되거나 리턴값으로 사용 가능

// 4-1. Number
// JS는 정수 또는 소수점을 가진 숫자 등 모두 같은 number 타입을 가짐
const count = 17;
const size = 17.1;
console.log(`value: ${count}, type: ${typeof count}`); // type: number
console.log(`value: ${size}, type: ${typeof size}`); // type: number

// special numeric values: infinity, -infinity, NaN
const infinity = 1/0;
const negativeInfinity = -1/0;
const nAn = 'not a number'/2;
console.log(infinity); // infinity
console.log(negativeInfinity); // -infinity
console.log(nAn); // NaN

// 4-2. String
// JS의 모든 문자열은 string 타입을 가짐
const char = 'a';
const brendan = 'brendan';
const greeting = 'hello' + brendan; 
console.log(`value: ${greeting}, type: ${typeof greeting}`); // type: string
const helloBob = `hi ${brendan}!`;
console.log(`value: ${helloBob}, type: ${typeof helloBob}`); // type: string

// 4-3. Boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3<1; 

// 📌 4-4. Null
// 변수가 null이라는 값을 할당 받은 것
let nothing = null;

// 📌 4-5. Undefined
// 변수에 값을 할당하지 않았거나 명확하게 undefined 값을 할당받은 것
let x;
let y = undefined;

// 4-6. Symbol
// 고유한 식별자가 필요하거나 동시다발적인 작업이 일어날 때 우선 순위를 적용함
// 📌 ${심볼변수명.description}을 통해 string으로 변환 후 출력해야함
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false

// 만약, 입력한 string이 같을 때 동일한 Symbol을 적용하고 싶다면 for사용
const fsymbol1 = Symbol.for('id');
const fsymbol2 = Symbol.for('id');
console.log(fsymbol1 === fsymbol2); // true

// 5. Dynamic typing
// JS는 런타임 시 할당된 값에 따라서 타입이 동적으로 변경됨을 의미함
// 이러한 특징으로 오류가 발생 => 타입스크립트
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`); // type: string
text = 1;
console.log(`value: ${text}, type: ${typeof text}`); // type: number
