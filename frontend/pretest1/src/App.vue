<template>
  <div id="app">
    <h1>Counter</h1>
    <Counter1 title="카운터1" description="첫째 컴포넌트" color="#ffb" @send="showValue"/>
    <Counter1 title="카운터2" @send="showValue"  />    
  </div>
</template>

<script>
import Counter1 from './Counter1.vue'

export default {
  name: 'App',
  components: { Counter1 },
  methods: {
    showValue(value){
      alert("값은 : "+value)
    }
  }
}
</script>

<style scoped>
div#app { padding: 30px; margin: 30px auto; max-width: 400px;
      border: 1px solid #ccc; box-shadow: 3px 3px 3px #aaa; }
</style>

