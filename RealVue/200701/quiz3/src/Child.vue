<template>
  <div :style="{backgroundColor: color}">
    <p>Child :</p>
  </div>
</template>

<script>
export default {
  name: "Child",
  props: ["color"]
 
}
</script>

<style scoped>
  div { border: 1px solid gray; padding: 0 20px 20px 20px; margin-top: 10px; }
</style>

