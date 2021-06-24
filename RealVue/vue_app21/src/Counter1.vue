<template>
  <div>
    <h2>{{ title }} - <small>{{ description }}</small></h2>
    <input type="number" v-model="counter" />
    <button type="button" @click="counter*=2"> X </button>
    <button type="button" @click="counter/=2"> % </button>
  </div>
</template>

<script>
export default {
  name: "Counter1",
  props: {
    title: { type: String,},
    description: { type: String, default: "계산값을 출력" }
  },
  data: function() {
    return { counter: 0 };
  }
}
</script>

<style scoped>
  div { border: 1px solid gray; padding: 0 20px 20px 20px; margin-top: 10px; }
  input { padding: 5px; margin-right: 5px; }
  button { padding: 0.4em 1em; margin-right: 5px; }
</style>

