<template>
  <div id="app">
    <h1>Child</h1>
    <input type="text" v-model="msg"> <br>
    <input type="radio" value="yellow" name="color" v-model="color">노란색
    <input type="radio" value="green" name="color" v-model="color">연두색
    <input type="radio" value="pink" name="color"  v-model="color">분홍색

    <Child :msg="msg" :color="color" />
    <Child :msg="msg" :color="color"/>
  </div>
</template>

<script>
import Child from './Child.vue'

export default {
  name: "App",
  components: { Child },
  data(){
    return {color: "yellow",msg: ""}
  }
}
</script>

<style scoped>
div#app { padding: 0 30px 30px 30px; margin: 30px auto; max-width: 400px;
      border: 1px solid #ccc; box-shadow: 3px 3px 3px #aaa; }
</style>

