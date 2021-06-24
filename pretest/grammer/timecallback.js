let obj = {
    count: 1,
    startTimer: function() {
      //console.log(this.count);
      let callback = () => {
          console.log(this.count++);
          if(this.count>5) clearInterval(id)
        } 
      let id=setInterval(callback, 1000); //callback함수내부에 count가 없으므로 NaN 발생
    }
  }
  
  obj.startTimer();
  
  