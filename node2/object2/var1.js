function test(){
    var sum=0
    for(var i=0;i<5;i++){
        var s="hello"
        sum+=i
    }

    console.log(sum);  // 55 출력됨
    console.log(i);    // 에러안나게 하려면 범위가 넓은 var 사용
    console.log(s);   

}
test()
 
