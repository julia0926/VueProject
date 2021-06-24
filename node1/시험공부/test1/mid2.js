let a=[];
let b=[];
for(let i=0;i<100;i++){
    a[i]=Math.floor(Math.random()*100+1);
}
b=a;//배열 복사해서
//오름차순 
a.sort(function (a,b) {
    return a-b;
})
console.log(a);
//내림차순 
b.sort(function (a,b) {
    return b-a;
})
console.log(b);