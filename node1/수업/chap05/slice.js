let s="abcdefgh";

console.log(s.slice(2,4));
console.log(s.slice(-5,-1));
console.log(s.slice(0));//문자열은 immutable 복제여부와 상관없이 원본은 안바뀜

let a=[1,2,4,5,6];
let b=a.slice(0);//복제
let c=a;//복사 똑같은 걸 참조
a[0]=11;
console.log(a);
console.log(b);
console.log(c);