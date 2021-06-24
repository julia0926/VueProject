let person=[]
for(let i=0;i<10;i++){
    person.push({ name: "홍길동", age: 16 + i } )
}
let person2=person.slice(0)
for(let i=0;i<10;i++){
    person2[i]=Object.assign({},person[i])
}
console.log(person)
person2[7].age=2
console.log(person2)
