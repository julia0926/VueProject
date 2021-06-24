let count=0;
let id=setInterval(printTime,1000,"1초간격");
function printTime(msg){
    console.log(msg, new Date());
    count++;
    if(count==10){
        clearInterval(id);
    }
}
