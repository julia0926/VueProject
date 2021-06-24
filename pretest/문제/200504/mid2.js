let arr=[]
for(let i=0;i<100;i++){
    arr[i]=Math.floor(Math.random()*100+1)
}
console.log(arr.sort((a,b)=>b-a)) //비교 함수를 지정해줘야한다.