let a=[];
for(let i=0;i<100;i++){
    a[i]=Math.floor(Math.random()*100+1);
}
console.log("기존 배열의 길이 : %d",a.length);
console.log(a);
console.log("------");
for(let i=0;i<100;i++){
    if(a[i]%2==0){//짝수라면 
        a.splice(i,1);//i번째 값을 1개 삭제하고
        i--;//앞으로 하나씩 당겨서 짝수인지 비교한다. 하나씩 빼지 않으면 엉뚱한 값이 나옴
    }
}
console.log(a);
console.log("현재 배열의 길이 : %d",a.length);
console.log("삭제 한 숫자 : %d",100-a.length);