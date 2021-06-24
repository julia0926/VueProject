let obj={
    count:0,
    startTimer: function(){
        console.log(this.count)
        let callback=function() {console.log(this.count++)} //setInterval() 즉 호출된 내부의 this를 가리키게 되어 실수!
        setInterval(count,1000)
    }
}

obj.startTimer()