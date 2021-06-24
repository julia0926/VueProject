function doSomething(a){
    let b=a.shift()//맨앞에 있는 항목 값 빼기
    a.push(b)
}

let a = ["a", "b", "c"];

console.log(a);
doSomething(a);

console.log(a);
doSomething(a);

console.log(a);
doSomething(a);

console.log(a);
doSomething(a);
