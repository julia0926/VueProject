function createArray() {
    let a1 = [1, 2, 3];
    let a2 = [a1, a1, a1];
    return a2;
}


let a = createArray();
console.log(a);

a[0][0] = 10;
console.log(a);
