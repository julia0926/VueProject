//배열을 나이순으로 정렬

let persons = [
    { name: "홍길동", age: 16 },
    { name: "임꺽정", age: 28 },
    { name: "전우치", age: 19 }
  ];

persons.sort((a,b)=>a.age-b.age)
console.log(persons)