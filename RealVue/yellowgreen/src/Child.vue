<template>
  <div>
    <h3>Child :</h3>
    <button type="button" :disabled="val" @click="$emit('send', yellow)">yellow</button>
    <button type="button" :disabled="!green" @click="$emit('send', green)">green</button>
  </div>
</template>

<script>
export default {
  name: "Child",
  data(){
      return {yellow: "#ffa",green: "#bfb", val: true }
  }
}
</script>

<style scoped>
div { border: 1px solid gray; padding: 10px; margin: 10px;  width:400px}
button { padding: 0.5em 1.5em; margin-right: 10px;}
</style>

