function doSomething(a, b) {
    let c=a.concat(b)
    c.sort()
    return c
}

let a = [3, 5, 8], b = [2, 1, 6, 4, 7];
console.log(doSomething(a, b));
