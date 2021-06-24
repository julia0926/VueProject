let person = { name: "홍길동", age: 16 };

console.log(Object.entries(person))

for(let [key,value] of Object.entries(person)){
    console.log("%s: %s",key,value)
}