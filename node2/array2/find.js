let persons = [
    { name: "홍길동", age: 16 },
    { name: "임꺽정", age: 18 },
    { name: "전우치", age: 19 }
  ];

let person=persons.find(p=>p.name=="전우치") //원소를 리턴 
let person=persons.findIndex(p=>p.name=="전우치") //인덱스 값을 리턴 
console.log(person)