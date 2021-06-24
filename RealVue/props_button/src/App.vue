<template>
  <div id="app">
    <h1>페이지2</h1>
    <button type="button" :disabled="val" @click="yellow">노란색</button>
    <button type="button" :disabled="!val" @click="green">초록색</button>
    <Child :color="color"/>
  </div>
</template>

<script>
import Child from './Child.vue' //같은 루트폴더에 있으면 이렇게 생성해도 됨 

export default {
  name: "App",
  components: { Child },
  data: function(){
    return {color: "",val: false}
  },
  methods:{
    yellow(){
      this.color="yellow"
      this.val=true
    },
    green(){
      this.color="green"
      this.val=false

    }
  }
}
</script>

<style scoped>
div#app { padding: 0 30px 30px 30px; margin: 30px auto; max-width: 400px;
      border: 1px solid #ccc; box-shadow: 3px 3px 3px #aaa; }
button { padding: 0.5em 1.5em; }
</style>

