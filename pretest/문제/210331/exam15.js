function doSomething(a) {
    let b=a.shift()
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
