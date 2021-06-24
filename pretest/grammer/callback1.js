let obj = {
    count: 0,
    startTimer: function() {
      console.log(this.count);
      let callback = function() { console.log(this.count++); };
      setInterval(callback, 1000); //callback함수내부에 count가 없으므로 NaN 발생
    }
  }
  
  obj.startTimer();
  
  