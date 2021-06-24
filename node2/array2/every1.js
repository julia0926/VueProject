let a1 = [1, 2, 3, 4];
let a2 = [0, 2, 4, 6];

let isEven= (i)=>i%2==0 //각 배열의 원소가 짝수라면
console.log(a1.every(isEven))
console.log(a2.every(isEven)) //각 원소에 대해 이 콜백함수가 호출되는데 모두 true이면 True 아니라면 false
