<template>
  <div id="app">
    <h1>Counter1</h1>
    <Child title="카운터1" descrption="컴포넌트1" color="#fbf" @send="send"/> 
    <Child title="카운터2"  @send="send"/> 
  </div>
</template>

<script>
import Child from './Child.vue'

export default {
  name: "App",
  components: { Child },
  data(){
    return {count: 0} 
  },
  methods:{
    send(c){
      this.count=c
      confirm(this.count)
    }
  }
}
</script>

<style scoped>
div#app { padding: 0 30px 30px 30px; margin: 30px auto; max-width: 400px;
      border: 1px solid #ccc; box-shadow: 3px 3px 3px #aaa; }

</style>

