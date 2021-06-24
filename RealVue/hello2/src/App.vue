<template>
  <div id="app">
    <h1>Child</h1>
    <input type="text" v-model.lazy="msg">
    <input type="radio" name="color" value="yellow" v-model="color">yellow
    <input type="radio" name="color" value="green" v-model="color">green
    <input type="radio" name="color" value="blue" v-model="color"> blue
    <Child :msg="msg" :color="color" />
    <Child :msg="msg" :color="color" />
  </div>
</template>

<script>
import Child from './Child.vue'

export default {
  name: "App",
  components: { Child },
  data(){
    return {msg: "",color: ""}
  }


}
</script>

<style scoped>
div #radio {margin: 10px auto;}

</style>

