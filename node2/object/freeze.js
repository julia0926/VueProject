let person={name:"홍길동",subject:"소프"}
Object.freeze(person)
person.name="김지인"
console.log(person)
console.log(Object.isFrozen(person)) //프리즈 했는지 안했는지 여부 확인할 때
