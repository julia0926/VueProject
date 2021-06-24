let arr=[]
for(let i=0;i<100;i++){
    arr[i]=Math.floor(Math.random()*100+1)
}
for(let i=0;i<100;i++){
    if(arr[i]%2==0){
        arr.splice(i,1)
        i--
    }
}
console.log(arr.sort((a,b)=>a-b))
console.log(arr.length)