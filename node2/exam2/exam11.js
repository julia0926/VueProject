function doSomething(a) {
    let b=a.slice(0)
    b.sort().reverse()
    return b
}
let a1 = [1, 2, 3];
let a2 = doSomething(a1);
console.log(a1, a2);
