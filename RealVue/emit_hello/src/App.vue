<template>
  <div id="app" :style="{backgroundColor: color}">
    <h1>페이지3</h1>
    <h2>App: {{msg}}</h2>
    <Child :msg="msg" @send="send" />
  </div>
</template>

<script>
import Child from './Child.vue' //같은 루트폴더에 있으면 이렇게 생성해도 됨 

export default {
  name: "App",
  components: { Child },
  data: function(){
    return {msg: ""}
  },
  methods:{
    send(m){
      this.msg=m
    }
  }
}
</script>

<style scoped>
div#app { padding: 0 30px 30px 30px; margin: 30px auto; max-width: 400px;
      border: 1px solid #ccc; box-shadow: 3px 3px 3px #aaa; }
</style>

