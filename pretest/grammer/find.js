let persons = [
    { name: "홍길동", age: 16 },
    { name: "임꺽정", age: 18 },
    { name: "전우치", age: 19 }
  ];

let person=persons.find(p=>p.age==18)
let index=persons.findIndex(p=>p.age==18)
console.log("%s: %s",person.name,person.age)
console.log(index)