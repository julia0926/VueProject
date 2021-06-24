<template>
  <div id="app">
    <h1>컨포넌트</h1>
    <select v-model="color">
          <option value="gray">gray</option>
          <option value="green">green</option>
          <option value="blue">blue</option>
          <option value="red">red</option>
    </select>
    <Child :color="color"/>
  </div>
</template>

<script>
import Child from './Child.vue' //같은 루트폴더에 있으면 이렇게 생성해도 됨 

export default {
  name: "App",
  components: { Child },
  data: function(){
    return {color: "gray"}
  }
}
</script>

<style scoped>
div#app { padding: 0 30px 30px 30px; margin: 30px auto; max-width: 400px;
      border: 1px solid #ccc; box-shadow: 3px 3px 3px #aaa; }
button { padding: 0.5em 1.5em; }
</style>

