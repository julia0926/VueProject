<template>
  <div>
    {{ time }}
    <h3>Count: {{count}}</h3>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "Clock",
  props: {
    format: { type: String, default: "HH:mm:ss" }
  },
  data: function() {
    return { time: null, count: 0};
  },
  mounted: function() {
    let callback = () => {
      this.time = moment().format(this.format)
      this.count++
      if(this.count==10) clearInterval(this.timerId)
    }
    callback();
    this.timerId = setInterval(callback, 1000);
  },
  beforeDestroy: function() {
    clearInterval(this.timerId);
  }
}
</script>

<style scoped>
div { display: inline-block; }
</style>

