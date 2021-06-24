<template>
  <div id="app" v-bind:style="{ backgroundColor: color }" >
    <h1>App: {{msg}}</h1>
    <Child :msg="value" @send="change"/>
  </div>
</template>

<script>
import Child from './Child.vue'

export default {
  name: "App",
  components: { Child },
  data: function() {
    return { msg: "",color: "#ffa",value: "" };
  },
  methods: {
    change(m,c){
      this.msg=m
      this.color=c;
    }
  }

}
</script>

<style scoped>
div { border: 1px solid gray; padding: 10px; margin: 10px; width:auto}
div #radio {margin: 10px auto;}
.yellow { background-color: #ffa; }
.green { background-color: #bfb; }
.blue { background-color: #bbf; }
</style>

