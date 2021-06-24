let persons = [
    { name: "홍길동", age: 16 },
    { name: "임꺽정", age: 18 },
    { name: "전우치", age: 19 }
  ];

console.log(persons.findIndex(p=>p.age==16))
console.log((persons.find(p=>p.name=="전우치")).age)