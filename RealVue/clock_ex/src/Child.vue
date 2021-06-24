<template>
  <div>{{ time }}</div>
</template>

<script>
import moment from "moment";

export default {
  name: "Child",
  data(){
      return {time: ""}
  },
  props:{
      format: {type:String, default: "HH:mm:ss"}
  },
  mounted(){
      let callback=()=>{
          this.time=moment().format(this.format)
          console.log(this.time)
        }
      callback()
      this.timerId=setInterval(callback,1000)
  },
  beforeDestroy(){
      clearInterval(this.timerId)
  }
 
}
</script>

<style scoped>
div { display: inline-block; }
</style>

