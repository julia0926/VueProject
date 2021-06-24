let person1 = { name: "홍길동", age: 16 };
let person2 = { name: "홍길동", age: 16 };
let p = person1;

console.log(person1 == person2);
console.log(person1 === p);

//객체 내부 값 비교

function equals(p1,p2){
    return p1.name==p2.name&&p1.age==p2.age
}
console.log(equals(person1,person2))
