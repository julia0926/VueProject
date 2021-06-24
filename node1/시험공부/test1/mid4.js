function sum(...a) {
    let result=0;
    for(let i=0;i<a.length;i++){
        result+=a[i];
    }
    return result;
}
function test_sum(f) {
    let arr=[];
    for(let i=0;i<5;i++){
        arr[i]=Math.floor(Math.random()*10);
    }
    console.log(arr);
    console.log(f(...arr)); //콜백 함수 호출시 함수 이름이 아닌 f 
}
for(let i=0;i<5;i++){
    test_sum(sum);
}