let person = { name: "홍길동", age: 16 };
let info = { age: 20, department: "소프", year: 2 };

let person2=Object.assign({},person)
console.log(person==person2)
person2=person
console.log(person==person2)