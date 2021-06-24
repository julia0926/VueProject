<template>
  <div :style="{backgroundColor: color}">
    <h2>Child: {{msg}}</h2>
  </div>
</template>

<script>
export default {
  name: "Child",
  props: [ "msg", "color" ]
}
</script>

<style scoped>
  div { border: 1px solid gray; padding: 0 20px 20px 20px; margin-top: 10px; }
  input { padding: 5px; margin-right: 5px; }
  button { padding: 0.4em 1em; margin-right: 5px; }
</style>

