<template>
  <div>
    {{val}}
  </div>
</template>

<script>
export default {
  name: "Counter",
  props: ["val"]
}
</script>

<style scoped>
  div { width: 10px; height: 10px; padding: 5px; margin: 20px;}
</style>

 