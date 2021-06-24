let obj={
    count:0,
    startTimer: function(){
        console.log(this.count) //메소소드 내의 this는 호출한 객체의 this.
        let callback = () =>{console.log(this.count++)} //화살표 함수 내부의 this는 구현된 곳을 가리킴 즉, obj
        setInterval(callback,1000) //콜백함수는 화살표함수로 구현하는게 this 문제로 안전! 
    }
}

obj.startTimer()