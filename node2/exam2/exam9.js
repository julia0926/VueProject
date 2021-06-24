function onTimer(){
    console.log(new Date())
    count++
    if(count==10) clearInterval(id)
}
let count=0
let id=setInterval(onTimer,1000)