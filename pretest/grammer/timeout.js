let count=0
function printTime() {
    console.log(new Date());
    count++
    if(count==10){
        clearInterval(id)
    }
    
}
  
let id=setInterval(printTime, 1000);
  
  