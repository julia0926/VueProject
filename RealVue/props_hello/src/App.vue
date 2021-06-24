<template>
  <div id="app">
    <h1>Hello</h1>
    <input type="text" v-model="hello" />
    <Child :msg="hello" />
    <Child :msg="hello" />
  </div>
</template>

<script>
import Child from './Child.vue'

export default {
  name: "App",
  components: { Child },
  data: function() {
    return { hello: ""};
  }

}
</script>

<style scoped>
div #radio {margin: 10px auto;}

</style>

