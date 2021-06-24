let arr=[]
for(let i=0;i<100;i++){
    arr[i]=Math.floor(Math.random()*100)+1
}
for(let i=0;i<100;i++){
    if(arr[i]%10<=9&&5<=arr[i]%10){
        arr.splice(i,1)
        i-- 
    }
}
console.log(arr)
console.log(arr.length)