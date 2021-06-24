//reduce로 최대값 구하기

let a1 = [7, 3, 8, 6, 9, 5, 1, 4]
let a2=a1.reduce((a,b)=>a>b?a:b)
console.log(a2)