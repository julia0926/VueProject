<template>
  <div id="app">
    <h1>Child</h1>
    <input type="text" v-model="value" />
    <div id="radio">
      <label>
          <input type="radio" name="color" value="#ffa" v-model="color" />yellow
      </label>
      <label>
          <input type="radio" name="color" value="#bfb" v-model="color"/>green
      </label>
      <label>
          <input type="radio" name="color" value="#bbf" v-model="color"/>blue
      </label>
    </div>
    <Child :msg="value" :color="color"/>
    <Child :msg="value" :color="color"/>
  </div>
</template>

<script>
import Child from './Child.vue'

export default {
  name: "App",
  components: { Child },
  data: function() {
    return { value: "",color: "#ffa" };
  }

}
</script>

<style scoped>
div #radio {margin: 10px auto;}

</style>

