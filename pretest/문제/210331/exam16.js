function doSomething(a) {
    a.shift()
    a.pop()
}

let a = [3, 4, 5, 6];
doSomething(a);
console.log(a);
