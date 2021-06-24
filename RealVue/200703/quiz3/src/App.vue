<template>
  <div id="app" :style="{backgroundColor: color}">
    <h1>App: {{msg}}</h1>
    <Child @send="send"/>
  </div>
</template>

<script>
import Child from './Child.vue'

export default {
  name: "App",
  components: { Child },
  data(){
    return {color: "yellow",msg: ""}
  },
  methods:{
    send(m,c){
      this.msg=m
      this.color=c
    }
  }
}
</script>

<style scoped>
div#app { padding: 0 30px 30px 30px; margin: 30px auto; max-width: 400px;
      border: 1px solid #ccc; box-shadow: 3px 3px 3px #aaa; }
</style>

