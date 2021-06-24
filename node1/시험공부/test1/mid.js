let a=[];
let sum=0;
for(let i=0;i<100;i++){
    a[i]=Math.floor(Math.random()*100+1);
    sum+=a[i];
}
let average=(sum/100).toFixed(1);
console.log(average);
