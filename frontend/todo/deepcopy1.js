let person = { name: "홍길동", age: 16 };

let s = JSON.stringify(person);
console.log(s);

person=JSON.parse(s)
console.log(person)
