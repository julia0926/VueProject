function clone(a) {
    let arr=a.slice(0);
    return arr;
}

let a = [1, 2, 3];
let b = clone(a);
a[0] = 11;
console.log(a);
console.log(b);
