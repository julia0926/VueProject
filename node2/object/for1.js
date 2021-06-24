let person={name:"홍길동",age:14}
for(let key in person){ //객체의 속성을 변수에 넣는다.
    let value=person[key]//person객체의 속성으로 value 값을 접근
    console.log("%s: %s",key,value)//반복문 안에 넣어야한다. 
} //총 두번 호출된다. person의 속성이 2개이므로.
