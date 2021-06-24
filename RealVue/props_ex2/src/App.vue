<template>
  <div id="app">
    <h1>페이지2</h1>
    <input type="text" v-model="msg" />
    <input type="radio" value="yellow" v-model="color"/> 노란색
    <input type="radio" value="green" v-model="color"/> 연두색
    <input type="radio" value="pink" v-model="color"/> 분홍색
    <Child :msg="msg" :color="color" />
    <Child :msg="msg" :color="color" />

  </div>
</template>

<script>
import Child from './Child.vue' //같은 루트폴더에 있으면 이렇게 생성해도 됨 

export default {
  name: "App",
  components: { Child },
  data(){
    return {value: "",color: "yellow"}
  }
}
</script>

<style scoped>
div#app { padding: 0 30px 30px 30px; margin: 30px auto; max-width: 400px;
      border: 1px solid #ccc; box-shadow: 3px 3px 3px #aaa; }
</style>

