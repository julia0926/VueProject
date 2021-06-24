let persons = [
    { name: "홍길동", age: 16 },
    { name: "임꺽정", age: 18 },
    { name: "전우치", age: 19 }
  ];
 
persons.sort((p1,p2)=>p2.name.localeCompare(p1.name)) //이름순 내림차순 정렬 
console.log(persons)