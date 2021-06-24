let person1=[]
for(let i=0;i<10;i++){
    person1.push({ name: "홍길동", age: 16 + i } )
}
let person2=person1.slice(0)
for(let i=0;i<person2.length;i++){
    person2[i]=Object.assign({},person1[i])
}
person1[2].name="hi"
person2[2].name="bye"
console.log(person1)
console.log(person2)