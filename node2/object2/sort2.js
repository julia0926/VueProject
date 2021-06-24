//배열을 이름 순으로 정렬 
let persons = [
    { name: "홍길동", age: 16 },
    { name: "임꺽정", age: 28 },
    { name: "전우치", age: 19 }
  ];
//문자열 비교할 때 
persons.sort((p1,p2)=>p1.name.localeCompare(p2.name))
console.log(persons)