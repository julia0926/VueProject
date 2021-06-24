<template>
  <div :style="{backgroundColor: color}">
    <h2>Child : {{msg}}</h2>
  </div>
</template>

<script>
export default {
  name: "Child",
  props: ["color","msg"]
 
}
</script>

<style scoped>
  div { border: 1px solid gray; padding: 0 20px 20px 20px; margin-top: 10px; }
</style>

