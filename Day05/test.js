console.clear();
let num = 5;

// ` 빽팃을 통해 $(달러표시)를 이용해
// 선언된 변수를 문자열에 넣을 수 있다.
console.log(`hello, num is ${num}`);

// 배열
let arr = [1,2,3,4,5];

// array 앞 부분에 처리하는 방식은
// shift(앞에서 pop과 똑같은 역할) 
// unshift(앞에서 push와 똑같은 역할)
arr.shift();
console.log(arr); // [2,3,4,5]
arr.unshift(10);
console.log(arr); // [10,2,3,4,5]

// 객체
let obj = new Object();
let obj1 = {}
let obj2 = { "name":"Seo", "grade":4, "school":"cnu"};
console.log(obj);
console.log(obj1);
console.log(obj2);
console.log(`이름은 ${obj2.name} 입니다.`);

// 객체에 키와 값 추가
obj2.phone = "010-1234-5555";
console.log(obj2);

// 객체의 key와 value 확인해보기
console.log(Object.keys(obj2));
console.log(Object.values(obj2));
