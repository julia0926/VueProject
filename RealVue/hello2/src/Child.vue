<template>
  <div :style="{backgroundColor: color}">
    <h2>Child: {{msg}}</h2>
  </div>
</template>

<script>
export default {
  name: "Child",
  props: ["msg","color"]

}
</script>

<style scoped>
div { border: 1px solid gray; padding: 10px; margin: 10px; background-color: #ffa; width:400px}
</style>

