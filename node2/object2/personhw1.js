let persons = [
    { name: "홍길동", age: 16 },
    { name: "임꺽정", age: 18 },
    { name: "김우치", age: 19 }
  ];


let max=persons.reduce((p1,p2)=>p1.name<p2.name?p1:p2) //문자열도 그냥 부등호로 비교가
console.log(max)

persons.sort((a,b)=>b.name.localeCompare(a.name))
console.log(persons)