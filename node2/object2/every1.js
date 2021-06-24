let a1 = [1, 2, 3, 4];
let a2 = [0, 2, 4, 6];
let a3 = [1,3,5]
//let isEven=(i)=>i%2==0 //리턴 값은 불린이 되겠군
console.log(a1.every((i)=>i%2==0))

console.log(a3.every(n=>n%2!=0))