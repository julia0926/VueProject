<template>
  <div id="app">
    <h1>페이지3</h1>
    <input type="text" v-model.lazy="msg" />
    <input type="radio" name="color" value="yellow" v-model="color" /> 노란색
    <input type="radio" name="color" value="green" v-model="color" /> 초록색
    <input type="radio" name="color" value="pink" v-model="color" /> 분홍색
    <Child :color="color" :msg="msg" />
    <Child :color="color" :msg="msg" />
  </div>
</template>

<script>
import Child from './Child.vue' //같은 루트폴더에 있으면 이렇게 생성해도 됨 

export default {
  name: "App",
  components: { Child },
  data: function(){
    return {color: "",msg: ""}
  }
}
</script>

<style scoped>
div#app { padding: 0 30px 30px 30px; margin: 30px auto; max-width: 400px;
      border: 1px solid #ccc; box-shadow: 3px 3px 3px #aaa; }
button { padding: 0.5em 1.5em; }
</style>

