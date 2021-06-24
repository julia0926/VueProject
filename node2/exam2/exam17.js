function doSomething(a) {
    return a.slice(1,-1) //앞에서 1번째부터 뒤에서 1번째 전까지 
}

let a1 = [3, 4, 5, 6];
let a2 = doSomething(a1);
console.log(a1, a2);
