<template>
  <div id="app">
  <h1>Clock</h1>
  <Child v-if="showTime" class="clockStyle1" format="YY-MM-DD HH:mm:ss" />
  <Child v-if="showTime" class="clockStyle2" />
  <button type="button" :disabled="!showTime" @click="showTime=false">시계 보이기</button>
  <button type="button" :disabled="showTime" @click="showTime=true">시계 감추기</button>

  </div>
</template>

<script>
import Child from './Child.vue'

export default {
  name: "App",
  components: { Child },
  data(){
    return {showTime: true}
  }
}
</script>

<style scoped>
div#app { padding: 0 30px 30px 30px; margin: 30px auto; max-width: 400px;
      border: 1px solid #ccc; box-shadow: 3px 3px 3px #aaa; }
button { padding: 0.5em 1.5em; margin: 20px 5px 0 0; }
.clockStyle1, .clockStyle2 { font-size: 15pt; border: 1px solid gray; }
.clockStyle1 { padding: 3px 12px; margin-right: 5px; background-color: #ffa; }
.clockStyle2 { padding: 3px 30px; background-color: #bfb;  }
</style>

