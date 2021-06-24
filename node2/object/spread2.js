let person={name:"김지인",age:23,math:44,coding:93}
let {name,age,...score}=person //...은 앞에 속성들을 제외한 나머지 속성들을 저장하여 객체로 만든다.
console.log(name,age,score)