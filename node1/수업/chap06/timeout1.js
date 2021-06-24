function printTime(msg) {
    console.log(msg,new Date());
}

setTimeout(printTime,1000,"1초후");
setTimeout(printTime,2000,"2초후");
setTimeout(printTime,3000,"3초후");