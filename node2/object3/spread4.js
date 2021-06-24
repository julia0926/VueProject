let name = "홍길동";
let age = 16;
let scores = { english: 90, math: 85, history: 95 };

let person1={name,age,...scores} 
//객체 내부 속성들이 객체에 복사됨, 꺼내짐
console.log(person1)

let person2={name,age,scores} 
console.log(person2)