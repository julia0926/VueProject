let person={name:"홍길동",age:14}
for(let a of Object.entries(person)){
    console.log(a)
} //2차원 배열 그대로 출력
for(let [key,value] of Object.entries(person)){
    console.log("%s: %s",key,value)
}
