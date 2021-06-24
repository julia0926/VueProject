<template>
  <div id="app">
    <h1>Counter1</h1>
    <Counter1 title="곱하기" description= "곱하기를 출력"/> 
    <Counter1 title="나누기" description= "나누기를 출력"/>
  </div>
</template>

<script>
import Counter1 from './Counter1.vue' //같은 루트폴더에 있으면 이렇게 생성해도 됨 

export default {
  name: "App",
  components: { Counter1 }
}
</script>

<style scoped>
div#app { padding: 0 30px 30px 30px; margin: 30px auto; max-width: 400px;
      border: 1px solid #ccc; box-shadow: 3px 3px 3px #aaa; }
</style>

