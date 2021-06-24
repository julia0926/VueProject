function printTime(msg) {
    console.log(msg,new Date());
    
}

setInterval(printTime,1000,"1초 간격");

//setInterval(msg=>console.log(msg,new Date()),1000,"1초 간격"); 
//화살표 함수 이용해서 위의 코드와 같음