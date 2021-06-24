<template>
  <div id="app" v-bind:style="{ backgroundColor: color }" >
    <h1>페이지</h1>
    <Child @send="change"/>
  </div>
</template>

<script>
import Child from './Child.vue'

export default {
  name: "App",
  components: { Child },
  data: function() {
    return {color: "" };
  },
  methods: {
    change(c){
      this.color=c;
      console.log(c)
    }
  }

}
</script>

<style scoped>
div { border: 1px solid gray; padding: 10px; margin: 10px; width:auto}
.yellow { background-color: #ffa; }
.green { background-color: #bfb; }
</style>

