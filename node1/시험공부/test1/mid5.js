let arr=[];
for(let i=0;i<100;i++){
    arr[i]=Math.floor(Math.random()*100+1);
}
//console.log(arr);

function find(...arr) {
    let sum=0;
    if(arr%2==0){
        sum+=arr%2;
    }
    console.log(sum);
}
find(arr);