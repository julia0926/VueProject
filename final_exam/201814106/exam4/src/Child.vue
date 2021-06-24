<template>
  <div>
    <h1 :style="{color: color}">Child 컴포넌트</h1>
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

